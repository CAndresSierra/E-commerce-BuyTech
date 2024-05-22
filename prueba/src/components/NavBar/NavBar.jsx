//Icons
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
import BurgerButton from "../BurgerButon/BurgerButton";

//Hooks
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ContainerNav>
      <ContainerLogo>
        <RiShoppingBag3Fill className="iconLogo" />
        <h1 className="h1Nav">BuyTech</h1>
      </ContainerLogo>

      <div className={`links ${open ? "active" : ""}`}>
        <a href="" className="a">
          <GoHomeFill />
          Home
        </a>
        <a href="" className="a">
          Monitores
        </a>
        <a href="" className="a">
          Tablets
        </a>
        <a href="" className="a">
          SmartPhones
        </a>
      </div>

      <div className={`containerButtons  ${open ? "ctBtnActive" : ""}`}>
        <ButtonNavSingIn>Iniciar Sesion</ButtonNavSingIn>
        <ButtonNavSingUp>Registrarse</ButtonNavSingUp>
      </div>

      <ContainerCart>
        <SpanContainer>
          <BsCart3 className="iconNav" />
        </SpanContainer>
        <SpanContainer>
          <LuUser2 className="iconNav" />
        </SpanContainer>
      </ContainerCart>

      <div className="burger">
        <BurgerButton open={open} handleClick={handleClick} />
      </div>

      <BgDiv className={`initial ${open ? "active" : ""}`} />
    </ContainerNav>
  );
};

export default NavBar;
