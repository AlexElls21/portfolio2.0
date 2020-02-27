import React from "react";
import Prismic from "prismic-javascript";

import usePrismic from "../../utils/usePrismic";

const Projects = () => {
  const { loading } = usePrismic(
    Prismic.Predicates.at("document.type", "project")
  );

  if (loading) return <div>LOADING....</div>;

  return <div>Projects</div>;
};

export default Projects;
