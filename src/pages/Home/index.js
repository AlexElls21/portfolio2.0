import React from "react";
import Prismic from "prismic-javascript";

import usePrismic from "../../utils/usePrismic";

const Home = () => {
  const { loading } = usePrismic(Prismic.Predicates.at("document.type", "project"));

  if (loading) return <div>LOADING....</div>;

  return <div>hi</div>;
};

export default Home;
