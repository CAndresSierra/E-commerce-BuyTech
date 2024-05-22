"use client";

import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { ChangeEvent, useState } from "react";
import { validateRegister } from "@/helpers/validations/validateRegister";
import { IRegister } from "@/interfaces/validations/IRegister";
import { LuEye } from "react-icons/lu";
import { FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const [registerDta, setRegisterDta] = useState<IRegister>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState<IRegister>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleOnChangeR = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRegisterDta({
      ...registerDta,
      [name]: value,
    });

    setErrors(validateRegister(registerDta));
  };

  const handleOnSubmitR = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerDta),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();

      await Swal.fire({
        title: "Usuario Registrado",
        icon: "success",
      });

      router.push("/home");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: `${error.message}`,
      });
    }
  };

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mx-5  my-9 md:flex md:items-center md:justify-center md:my-9">
      <form
        onSubmit={handleOnSubmitR}
        className="bg-gray-300 border-[4px] border-blue-900 rounded-2xl shadow-si-su"
      >
        <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
          <RiShoppingBag3Fill className="h-12 w-12 text-yellow-300" />

          <h1 className="text-gray-900 text-2xl">
            Regístrate en{" "}
            <strong className="text-3xl text-blue-800">BuyTech</strong>
          </h1>
          <div className="flex flex-col gap-4 w-full md:w-10/12 md:flex-row md:justify-around">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                className="w-full  md:w-9/12 p-2 bg-blue-900 rounded-md rounded-l-none border text-gray-100 border-gray-700 focus:border-blue-700 hover:border-blue-500 focus:bg-transparent focus:text-black transition-all duration-200"
                placeholder="Nombre"
                type="text"
                name="name"
                onChange={handleOnChangeR}
              />
            </div>

            <div className="flex justify-end">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <FaPhoneAlt className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </span>

              <input
                className="w-full  md:w-9/12 p-2 bg-blue-900 rounded-md  rounded-l-none border text-gray-100 border-gray-700 focus:border-blue-700 hover:border-blue-500 focus:bg-transparent focus:text-black ransition-all duration-200"
                placeholder="Telefono"
                type="text"
                name="phone"
                onChange={handleOnChangeR}
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-10/12 gap-5">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <FaAddressCard className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </span>

              <input
                className="w-full p-2 bg-blue-900 rounded-md  rounded-l-none border text-gray-100 border-gray-700 focus:border-blue-700 hover:border-blue-500 focus:bg-transparent focus:text-black ransition-all duration-200"
                placeholder="Direccion"
                type="text"
                name="address"
                onChange={handleOnChangeR}
              />
            </div>

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <MdAlternateEmail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </span>

              <input
                className="w-full p-2 bg-blue-900 rounded-md  rounded-l-none border text-gray-100 border-gray-700 focus:border-blue-700 hover:border-blue-500 focus:bg-transparent focus:text-black ransition-all duration-200"
                placeholder="Email"
                type="text"
                name="email"
                onChange={handleOnChangeR}
              />
            </div>
            {errors.email && (
              <div
                className="flex  items-center w-73 p-4 mb-4 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">El email!</span> {errors.email}
                </div>
              </div>
            )}

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <FaLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </span>

              <input
                className="w-full p-2 bg-blue-900 rounded-md  rounded-l-none border text-gray-100 border-gray-700 focus:border-blue-700 hover:border-blue-500 focus:bg-transparent focus:text-black ransition-all duration-200"
                placeholder="Contraseña"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleOnChangeR}
              />
              <button type="button" onClick={handleShowPass}>
                {showPassword ? (
                  <LuEye className="ml-2" />
                ) : (
                  <FiEyeOff className="ml-2" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className=" w-10/12  p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
          >
            Regístrate
          </button>

          <p>
            Ya tienes una cuenta?
            <Link
              className="font-semibold text-blue-800 hover:text-blue-700 hover:underline hover:underline-offset-2 transition-all duration-200"
              href="/login"
            >
              Inicia Sesion
            </Link>
          </p>
        </div>
      </form>

      {errors.password && (
        <div
          className="absolute text-xs top-[64rem] 2xl:right-[13.8rem] 2xl:top-[35.2rem] flex p-4 mb-4 md:text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Danger</span>
          <div>
            <span className="font-medium">Para una contraseña mas segura:</span>
            <ul className="mt-1.5 list-disc list-inside">
              <li>Debe tener entre 8 a 16 caracteres</li>
              <li>Debe contener al menos una letra (mayúscula o minúscula)</li>
              <li>debe contener al menos un numero</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
