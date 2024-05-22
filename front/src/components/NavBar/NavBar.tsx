"use client";

import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { RiShoppingBag3Fill } from "react-icons/ri";
//Styles
import {
  ContainerNav,
  ContainerCart,
  ContainerLogo,
  SpanContainer,
  BgDiv,
} from "./styles/Containers";
import { ButtonNavSingIn, ButtonNavSingUp } from "./styles/Childrens";
import BurgerButton from "../BurgerButton/BurgerButton";

//Hooks
import { useEffect, useState } from "react";
import DropDownUser from "../DropDownUser/DropDownUser";
import { usePathname } from "next/navigation";
import { Dropdown } from "flowbite-react";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [userSession, setUserSession] = useState();
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickDropTrue = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userDta = localStorage.getItem("userSession");

      setUserSession(JSON.parse(userDta!));
    }
  }, [pathname]);

  return (
    <ContainerNav>
      <ContainerLogo>
        <RiShoppingBag3Fill className="iconLogo" />
        <h1 className="h1Nav">BuyTech</h1>
      </ContainerLogo>

      <div className={`links ${open ? "active" : ""}`}>
        <Link href="/home" className="a">
          <GoHomeFill className="homeLogo" />
          Home
        </Link>
        <Dropdown
          label=""
          style={{
            backgroundColor: "#0f5f94",
            fontSize: "20px",
          }}
          renderTrigger={() => (
            <span className="px-2 py-2 flex flex-row  mb-0 ml-6 mt-2 md:ml-0 md:mt-0 items-center hover:text-gray-300 cursor-pointer gap-1 md:hover:text-[#1070af] transition-[0.5s]">
              <p className="text-[1.2rem] text-black  hover:text-gray-300 md:hover:text-[#1070af] transition-[0.5s]">
                Categories
              </p>
              <svg
                className="w-3 h-6 text-gray-800 dark:text-white hover:text-gray-300 md:hover:text-[#1070af] transition-[0.5s]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </span>
          )}
          dismissOnClick={false}
        >
          <Dropdown.Item>All</Dropdown.Item>
          <Dropdown.Item>Smartphones</Dropdown.Item>
          <Dropdown.Item>Laptops</Dropdown.Item>
          <Dropdown.Item>Tablets</Dropdown.Item>
          <Dropdown.Item>Headphones</Dropdown.Item>
          <Dropdown.Item>Cameras</Dropdown.Item>
          <Dropdown.Item>Printers</Dropdown.Item>
        </Dropdown>
        <a href="" className="a">
          Contact Us
        </a>
        <a href="" className="a">
          About
        </a>
      </div>

      <div className={`containerButtons  ${open ? "ctBtnActive" : ""}`}>
        <Link href="/login">
          <ButtonNavSingIn>Iniciar Sesion</ButtonNavSingIn>
        </Link>
        <Link href="/register">
          <ButtonNavSingUp>Registrarse</ButtonNavSingUp>
        </Link>
      </div>

      <ContainerCart>
        <Link href="/cart">
          <SpanContainer>
            <BsCart3 className="iconNav" />
          </SpanContainer>
        </Link>
        {userSession ? (
          <button onClick={handleClickDropTrue}>
            <SpanContainer>
              <LuUser2 className="iconNav" />
              {dropDown && <DropDownUser />}
            </SpanContainer>
          </button>
        ) : (
          ""
        )}
      </ContainerCart>

      <div className="burger">
        <BurgerButton open={open} handleClick={handleClick} />
      </div>

      <BgDiv className={`initial ${open ? "active" : ""}`} />
    </ContainerNav>
  );
};

export default NavBar;
