import React from "react";
import styled, { css } from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;

  height: 100vh;
  width: 100vw;

  ${({ theme: { space } }) => css`
    padding: ${space.large};
  `}
`;

const Home = () => {
  return (
    <GridContainer canAccess>
      <div>hi</div>
      <div>bye</div>
    </GridContainer>
  );
};

export default Home;
