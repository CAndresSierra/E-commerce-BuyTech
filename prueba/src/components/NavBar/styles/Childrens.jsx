import styled from "styled-components";

export const ButtonNavSingIn = styled.button`
  text-decoration: none;
  padding: 8px;
  transition: 0.5s ease-in-out;
  color: #dde4e9;
  border: 3px solid #0a3f64;
  font-size: 1.1rem;
  font-family: "Overpass", sans-serif;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  box-shadow: inset 0 0 0 0 #0a3f64;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  &:hover {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: inset 400px 0 0 0 #0a3f64;
  }
`;

export const ButtonNavSingUp = styled.button`
  text-decoration: none;
  padding: 8px;
  font-size: 1.1rem;
  border: 3px solid #0a3f64;
  background-color: transparent;
  font-family: "Overpass", sans-serif;
  transition: 0.5s ease-in-out;
  color: #dde4e9;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  box-shadow: inset 0 0 0 0 #0a3f64;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  &:hover {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: inset 400px 0 0 0 #0a3f64;
  }
`;
