"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const DropDownUser: React.FC = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userDta = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userDta!));
    }
  }, []);

  const handleLogOut = () => {
    Swal.fire({
      title: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cierra sesion!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesion cerrada!",
          text: "Haz cerrado sesion con exito.",
          icon: "success",
        });
        localStorage.removeItem("userSession");
      }
    });
  };

  return (
    <div className="z-10 absolute mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            href="/dashboard"
            className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-2">
        <button onClick={handleLogOut}>
          <p className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Cerrar Sesion
          </p>
        </button>
      </div>
    </div>
  );
};

export default DropDownUser;
