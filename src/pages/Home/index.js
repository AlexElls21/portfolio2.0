import React from "react";
import Prismic from "prismic-javascript";

import usePrismic from "../../utils/usePrismic";

import styled from "styled-components";

import { Card, Button, CardTitle, CardText } from "reactstrap";

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  left: 0px;
`;

const Header = styled.div`
  font-size: 25px;
  margin-bottom: 60px;
  margin-left: 75px;
  border-bottom: 3px solid #ea0f36;
  padding-bottom: 20px;
  width: 200px;
`;

const Home = () => {
  const { loading } = usePrismic(
    Prismic.Predicates.at("document.type", "project")
  );

  if (loading) return <div>LOADING....</div>;

  return (
    <ProjectsDiv>
      <Header>Contact Me</Header>
      <Card body outline color="danger">
        <CardTitle>Send me an Email!</CardTitle>
        <CardText>
          Thanks for taking some time to look over my projects and my
          expierence. Please feel free to send me an email im always looking for
          new people to meet and oppourtuntiys to work on new projects!
        </CardText>
        <Button color="secondary">Email me!</Button>
      </Card>
    </ProjectsDiv>
  );
};

export default Home;
