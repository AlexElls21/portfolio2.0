import React, { useState } from "react";
import styled, { css } from "styled-components";
import Prismic from "prismic-javascript";

import usePrismic from "../../utils/usePrismic";

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
  const { loading } = usePrismic(Prismic.Predicates.at("document.type", "project"));

  if (loading) return <div>LOADING....</div>;

  return (
    <GridContainer canAccess>
      <div>hi</div>
      <div>bye</div>
    </GridContainer>
  );
};

export default Home;
