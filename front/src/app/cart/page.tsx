"use client";

import { createOrder } from "@/helpers/ApiPetitions/createOrderPetition";
import { IProduct } from "@/interfaces/IProduct";
import { IUserSession } from "@/interfaces/IUserSession";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import Swal from "sweetalert2";

const Cart: React.FC = () => {
  const [productCart, setProductCart] = useState<IProduct[] | undefined>();
  const [userSession, setUserSession] = useState<IUserSession>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
      if (!userToken) {
        Swal.fire({
          icon: "info",
          title: "Inicia Sesion!",
          text: "Debes inciar sesion",
        });
        router.push("/login");
      } else {
        const product = localStorage.getItem("cart");
        setProductCart(JSON.parse(product!));
      }
    }
  }, []);

  useEffect(() => {
    let totalCart = 0;
    productCart?.forEach((product: IProduct) => {
      totalCart += product.price;
    });
    setTotalPrice(totalCart);
  }, [productCart]);

  const handleBuy = async () => {
    try {
      const products = new Set(productCart?.map((product) => product.id));

      await createOrder(Array.from(products), userSession?.token!);
      localStorage.setItem("cart", "[]");
      setProductCart([]);
      setTotalPrice(0);
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Compra realizada con exito",
      });
    } catch (error: any) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: `${error}`,
      });
    }
  };

  const deleteProduct = (id: number) => {
    const products = localStorage.getItem("cart");

    const productsArray = JSON.parse(products!);

    const newProductsCart = productsArray.filter((product: IProduct) => {
      return product.id !== id;
    });

    localStorage.setItem("cart", JSON.stringify(newProductsCart));
    setProductCart(newProductsCart);
  };

  return (
    <div className="flex flex-col items-center  md:items-start justify-between my-5 mx-5 md:flex-row  ">
      <div className="flex flex-col items-center justify-evenly md:w-9/12">
        <h1 className="text-2xl font-semibold text-cart-title">Carrito</h1>
        {productCart && productCart.length > 0 ? (
          productCart?.map((product: IProduct) => {
            return (
              <div
                key={product.id}
                className="flex flex-row mx-5 my-2 gap-3 bg-gray-50 py-3 px-3 rounded-2xl md:w-[70%] md:px-8 md:py-8"
              >
                <div className=" flex flex-col items-center justify-center w-1/4 h-1/4">
                  <img
                    src={product.image}
                    alt="productCart"
                    className=" w-[60%] h-[60%] rounded-2xl"
                  />
                </div>

                <div className="ml-4 flex flex-col justify-center gap-2 md:ml-6 md:justify-start">
                  <h1 className="font-bold text-base md:text-2xl">
                    {product.name}
                  </h1>

                  <span className="bg-green-100 text-green-800 text-sm md:text-xl md:w-32 w-24 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    price: {product.price}
                  </span>

                  <button
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                  >
                    <LuTrash2 className="hover:text-red-700  duration-500 text-lg md:text-xl" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="my-5">
            <h1 className=" text-xl md:text-2xl">
              No tienes nada en el carrito
            </h1>
          </div>
        )}
      </div>
      <div className="w-11/12 flex flex-col md:w-3/12 md:mr-5  ">
        <h1 className="text-2xl font-semibold text-cart-title">
          Resumen De la compra
        </h1>
        <div className="flex flex-col justify-center mt-4 mb-4 bg-gray-50 gap-3 rounded-2xl py-4 px-4 ">
          <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>$: {totalPrice}</p>
          </div>
          <p>Descuento</p>
          <div className="flex flex-row justify-between">
            <p className="text-xl font-semibold">Total</p>
            <p>$: {totalPrice}</p>
          </div>
          <button
            onClick={handleBuy}
            className="cursor-pointer transition-all 
          bg-bg-cart text-white px-6 py-2 rounded-lg
          border-blue-400
            border-b-[4px] hover:brightness-110 active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-300 shadow-blue-300 active:shadow-none"
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
