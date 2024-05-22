"use client";

import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { FiEyeOff } from "react-icons/fi";
import { ChangeEvent, useState } from "react";
import { validateLogin } from "@/helpers/validations/validateLogin";
import Link from "next/link";
import { ILogin } from "@/interfaces/validations/ILogin";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [loginDta, setLoginDta] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ILogin>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginDta({
      ...loginDta,
      [name]: value,
    });

    setErrors(validateLogin(loginDta));
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDta),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      const { token, user } = json;

      localStorage.setItem(
        "userSession",
        JSON.stringify({ token: token, userDta: user })
      );

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
        title: "Inicio de sesion exitoso",
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
        onSubmit={handleOnSubmit}
        className="bg-gray-300 border-[4px] border-blue-900 rounded-2xl shadow-si-su"
      >
        <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
          <RiShoppingBag3Fill className="h-12 w-12 text-yellow-300" />

          <h1 className="text-gray-900 text-2xl">
            Inicia Sesion en{" "}
            <strong className="text-3xl text-blue-800">BuyTech</strong>
          </h1>
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
              className="w-full p-2 bg-blue-900 rounded-md  rounded-l-none border text-gray-100 border-gray-700 focus:border-blue-700 hover:border-blue-500 focus:bg-transparent focus:text-black transition-all duration-200"
              placeholder="Email"
              type="text"
              name="email"
              onChange={handleOnChange}
            />
          </div>
          {errors.email && (
            <div
              className="flex items-center w-72 p-4 mb-4 text-xs text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
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
              <div>Email {errors.email}</div>
            </div>
          )}

          <div className="flex max-w-[279px]">
            <span className="inline-flex items-center px-3 text-sm text-gray-900  bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FaLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </span>

            <input
              className="w-full p-2 bg-blue-900 rounded-md  rounded-l-none border text-gray-100 border-gray-700 focus:border-blue-700 hover:border-blue-500 focus:bg-transparent focus:text-black ransition-all duration-200"
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleOnChange}
            />
            <button type="button" onClick={handleShowPass}>
              {showPassword ? (
                <LuEye className="ml-2" />
              ) : (
                <FiEyeOff className="ml-2" />
              )}
            </button>
          </div>

          {errors.password && (
            <div
              className="flex items-center w-72 p-4 mb-4 text-xs text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
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
              <div>Contraseña {errors.password}</div>
            </div>
          )}
          <button
            type="submit"
            className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
          >
            Iniciar Sesion
          </button>

          <p>
            No tienes una cuenta?
            <Link
              className="font-semibold text-blue-800 hover:text-blue-700 hover:underline hover:underline-offset-2 transition-all duration-200"
              href="/register"
            >
              Registrate
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
