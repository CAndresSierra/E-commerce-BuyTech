import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  line-height: 28px;
  height: 60px;
  align-items: center;
  position: relative;
  justify-content: center;
  max-width: 100%;
  background-color: #252c30;

  .input {
    width: 40%;
    min-width: 300px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #d7dee1;
    color: #0d0c22;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #056a92;
    font-family: "Overpass", sans-serif;
    font-size: 1rem;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: #0a3f64;
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(0 48 73 / 10%);
    font-family: "Overpass", sans-serif;
    font-size: 1rem;
  }

  .icon {
    position: absolute;
    left: 40rem;
    fill: #056a92;
    font-weight: bold;
    width: 1rem;
    height: 1rem;
  }
`;
