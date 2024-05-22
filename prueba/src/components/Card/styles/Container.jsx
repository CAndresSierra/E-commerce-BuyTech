import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  width: 360px;
  min-width: 100px;
  height: 588px;
  min-height: 100px;
  border-radius: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  img {
    width: 100%;
    max-width: 180px;
    height: 100%;
    max-height: 165px;
    border-radius: 20px;
  }

  .description {
    width: 80%;
  }
`;
