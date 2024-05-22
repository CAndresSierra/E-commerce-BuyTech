"use client";

import { getProductById } from "@/helpers/ApiPetitions/productsPetitions";
import { IProduct } from "@/interfaces/IProduct";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const DetailProduct = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [product, setProduct] = useState<IProduct>();
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    const fetchDta = async () => {
      const product = await getProductById(params.id);
      setProduct(product);
    };
    fetchDta();

    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
    }
  }, []);

  const handleAddCart = () => {
    if (!userSession) {
      Swal.fire({
        icon: "info",
        title: "Inicia Sesion!",
        text: "Debes inciar sesion para poder agrergar un producto al carrito",
      });
      router.push("/login");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      Swal.fire({
        title: "Se agrego correctamente",
        text: "Quieres ir al carrito?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/cart");
        }
      });
    }
  };
  return (
    <div className="flex flex-col justify-evenly my-6">
      <div className="flex flex-col  md:flex justify-center items-center md:flex-row w-full">
        <img
          src={product?.image}
          alt="imgProduct"
          className="w-3/5 h-3/5 md:max-w-[20rem] md:max-h-[30rem] md:mx-5 rounded-lg shadow-xl "
        />
        <div className="mt-5 flex mx-4 flex-col justify-around items-center md:flex  md:justify-start md:gap-4 md:items-start md:mx-16 md:w-2/5">
          <h1 className="text-2xl font-bold antialiased md:text-4xl">
            {product?.name}
          </h1>
          <p className="md:text-xl">{product?.description}</p>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95 de 5
            </p>
          </div>
          <div className="flex flex-row my-4 justify-evenly md:gap-5">
            <h1 className="bg-green-100 text-green-800 text-base md:text-xl font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              $: {product?.price}
            </h1>
            <p className="md:text-xl">
              <strong>Stock:</strong> {product?.stock}
            </p>
          </div>
          <button
            onClick={handleAddCart}
            className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-blue-500 bg-blue-800 group hover:bg-blue-800 active:bg-blue-500 active:outline-cyan-500"
          >
            <span className="text-white font-semibold ml-8 transform group-hover:translate-x-30 transition-all duration-300">
              Add Cart
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-blue-800 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <svg
                className="svg w-8 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
