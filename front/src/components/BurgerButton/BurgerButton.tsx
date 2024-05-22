import styled from "styled-components";

const BurgerButton: React.FC<{ handleClick: any; open: any }> = ({
  handleClick,
  open,
}) => {
  return (
    <Burger>
      <div onClick={handleClick} className={`nav-icon3  ${open ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  );
};

export default BurgerButton;

const Burger = styled.div`
  .nav-icon3 {
    width: 40px;
    height: 38px;
    position: relative;
    margin: 50px auto;
    margin-right: 15px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  .nav-icon3 span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #f4f4f4;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  .nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  .nav-icon3 span:nth-child(2),
  .nav-icon3 span:nth-child(3) {
    top: 18px;
  }

  .nav-icon3 span:nth-child(4) {
    top: 36px;
  }

  .nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;
