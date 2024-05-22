"use client";

import { getOrders } from "@/helpers/ApiPetitions/userOrderPetition";
import { IOrder } from "@/interfaces/IOrder";
import { IProduct } from "@/interfaces/IProduct";
import { IUserSession } from "@/interfaces/IUserSession";
import Link from "next/link";
import { useEffect, useState } from "react";

import { RiShoppingBag3Fill } from "react-icons/ri";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userSession, setUserSession] = useState<IUserSession>();
  const [orders, setOrders] = useState<IOrder[]>();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const sidebar = document.getElementById("logo-sidebar");
    const button = document.querySelector(
      'button[data-drawer-target="logo-sidebar"]'
    );

    if (
      sidebar &&
      !sidebar.contains(event.target as Node) &&
      event.target !== button
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userSession!));
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    async function getOrdersUser() {
      try {
        const res = await getOrders(userSession?.token!);

        const data = await res.json();
        setOrders(data);
      } catch (error: any) {
        throw new Error(error);
      }
    }
    userSession && getOrdersUser();
  }, [userSession]);

  return (
    <div className="flex flex-row justify-evenly h-screen w-screen">
      <div>
        <button
          onClick={toggleSidebar}
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className=" inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6 pointer-events-none"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
            <Link href="/home" className="flex items-center ps-2.5 mb-5">
              <RiShoppingBag3Fill className="text-[35px] text-yellow-300" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                BuyTech
              </span>
            </Link>
            <ul className="space-y-2 font-medium">
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1070af] dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Ajustes</span>
                </a>
              </li>

              <li>
                <a
                  href="#welcome&Info"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1070af] dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Perfil</span>
                </a>
              </li>
              <li>
                <a
                  href="#orders"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1070af] dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Ordenes</span>
                </a>
              </li>
              <li>
                <Link
                  href="/home"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-[#1070af]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Regresar
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="flex flex-col items-center w-full md:w-[60%]">
        <section
          className=" flex flex-col w-[80%] items-center my-10 gap-5"
          id="welcome&Info"
        >
          <h1 className="text-2xl  md:text-3xl text-black">
            Bienvenido{" "}
            {
              <strong className="text-[#1070af]">
                {userSession?.userDta.name}
              </strong>
            }
            !
          </h1>
          <div className="flex flex-col w-full md:w-[70%] justify-center items-center gap-2 rounded-md bg-gray-200 border-double border-[#1070af] border-4 px-5 py-5">
            <h3 className="text-xl md:text-2xl">
              <strong>Info del Perfil</strong>
            </h3>
            <div className="flex flex-col items-start  w-full md:w-[65%] gap-4">
              <div className="flex flex-row justify-between border-b-[1.5px] border-gray-400 w-full py-1">
                <p className="text-sm md:text-base">Nombre:</p>
                <strong className="font-semibold text-sm md:text-base">
                  {userSession?.userDta.name}
                </strong>
              </div>

              <div className="flex flex-row justify-between border-b-[1.5px] border-gray-400 w-full py-1">
                <p className="text-sm md:text-base">Email:</p>
                <strong className="font-semibold text-sm md:text-base">
                  {userSession?.userDta.email}
                </strong>
              </div>

              <div className="flex flex-row justify-between border-b-[1.5px] border-gray-400  w-full py-1">
                <p className="text-sm md:text-base">Direccion:</p>
                <strong className="font-semibold text-sm md:text-base">
                  {userSession?.userDta.address}
                </strong>
              </div>

              <div className="flex flex-row justify-between border-b-[1.5px] border-gray-400 w-full py-1">
                <p className="text-sm md:text-base">Telefono:</p>
                <strong className="font-semibold text-sm md:text-base">
                  {userSession?.userDta.phone}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section
          id="orders"
          className="flex flex-col w-[80%] md:w-[56%] items-center bg-gray-200 border-double rounded-md border-[#1070af] border-4 px-5 py-5 justify-center my-10 gap-5"
        >
          <h3 className="text-xl md:text-2xl">
            <strong>Ordenes</strong>
          </h3>
          <div className="flex flex-col w-full items-center gap-8 justify-around">
            {orders?.map((order: IOrder) => {
              const dateStr = order.date;

              const dateObj = new Date(dateStr);
              const year = dateObj.getFullYear();
              const day = dateObj.getDate();
              const month = dateObj.getMonth();
              const fecha = `${year}/${day}/${month + 1}`;

              let total = 0;

              return (
                <div
                  key={order.id}
                  className="gap-4 flex flex-col items-center rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.3)] bg-gray-100 px-5 py-5"
                >
                  <div className="flex flex-row justify-between w-[80%]">
                    <p className="text-lg font-medium">Fecha: </p>
                    <strong>{fecha}</strong>
                  </div>
                  <div className="flex flex-col gap-5">
                    {order.products.map((product) => {
                      total += product.price;

                      return (
                        <div
                          key={product.id}
                          className="flex flex-col justify-around"
                        >
                          <div
                            key={product.id}
                            className="flex flex-row justify-between items-center"
                          >
                            <div className="w-[30%] h-full flex flex-col items-center">
                              <img
                                src={product.image}
                                alt="e-commerce product"
                                className="w-[60%] h-full rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col md:flex-row justify-between w-[150px] items-center gap-3">
                              <p className="font-semibold text-[0.8rem] md:text-lg">
                                Precio:
                              </p>
                              <p className=" text-green-800 text-sm md:text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                ${product.price}
                              </p>
                            </div>
                            <div className="flex flex-col items-center w-[120px] ">
                              <p className="font-semibold text-[0.8rem] md:text-lg">
                                Nombre:{" "}
                              </p>
                              <p className="font-semibold text-[#1070af] text-[0.9rem] md:text-lg">
                                {product.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-row justify-between w-[80%]">
                    <p className="font-medium text-[0.8rem] md:text-lg">
                      Total:
                    </p>
                    <p className=" text-black text-sm md:text-lg font-bold  me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      ${total}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
