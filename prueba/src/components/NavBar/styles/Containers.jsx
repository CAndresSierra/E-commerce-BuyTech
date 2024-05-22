import styled from "styled-components";

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    to right,
    #051937,
    #0a3f64,
    #056a92,
    #0899bc,
    #2ccae1
  );

  .burger {
    @media (min-width: 1000px) {
      display: none;
    }
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease;
    .a {
      text-decoration: none;
      font-size: 1.2rem;
      color: black;
      transition: 0.5s;
      display: block;
    }

    .a:hover {
      color: #1070af;
    }

    @media (min-width: 1000px) {
      position: initial;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      background-color: #cacfd2;
      align-items: center;
      border-radius: 1.5rem;
      width: 30%;
      height: 65px;

      .a {
        display: flex;
        text-decoration: none;
        font-size: 1.2rem;
        color: black;
        transition: 0.5s;
      }

      .a:hover {
        color: #1070af;
      }
    }
  }

  .links.active {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    justify-content: space-evenly;
    position: absolute;
    z-index: 2;

    .a {
      display: flex;
      margin-left: 2rem;
      font-size: 1.1rem;
      color: black;
      margin-top: 2rem;
      transition: 0.5s;
    }

    .a:hover {
      color: #d7dfe3;
    }
  }

  .containerButtons {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease;

    @media (min-width: 1000px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 250px;
      margin: auto;
      position: initial;
    }
  }

  .ctBtnActive {
    width: 35%;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 70%;
    left: 7%;
    right: 77%;
    justify-content: space-evenly;
    position: absolute;
    z-index: 2;
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height: 35px;
  margin: auto;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 160px;
  min-width: 40px;
  height: 70px;
  min-height: 10px;
  border: 3px solid #faf9f4e9;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  margin: auto;

  .iconLogo {
    font-size: 35px;
    color: rgba(240, 201, 8, 0.914);
  }

  .h1Nav {
    color: #faf9f4e9;
  }

  @media screen and (max-width: 1100px) {
    height: 38px;
    justify-content: center;
    .iconLogo {
      font-size: 25px;
    }

    .h1Nav {
      color: #faf9f4e9;
      font-size: 20px;
    }
  }
`;

export const SpanContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  border-radius: 45%;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #22b8ce;
  }

  .iconNav {
    font-size: 1.7rem;
  }
`;

export const BgDiv = styled.div`
  position: absolute;
  background: linear-gradient(
    to right top,
    #1b2553,
    #184779,
    #066b9e,
    #0091be,
    #13b8da
  );
  width: 300px;
  height: 100vh;
  top: -700px;
  z-index: 1;
  left: -2000px;
  transition: all 0.6s ease;

  &.active {
    position: absolute;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 53%;
    height: 100%;
  }
`;
