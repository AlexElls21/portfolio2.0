import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { GlobalStyle } from "./theme";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;

  height: 100vh;
  width: 100vw;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 150px;
  text-transform: uppercase;
  font-weight: 500;
  NavLink {
    color: black;
  }
  .active {
    border-bottom: 2px solid #ea0f36;
  }
`;

const ProfileContainer = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 100px;
`;

const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
`;

const App = () => (
  <GridContainer>
    <Router>
      <GlobalStyle />
      <ProfileContainer>
        <div
          style={{
            background: "white",
            borderRadius: "100%",
            height: "500px",
            width: "500px"
          }}
        ></div>
      </ProfileContainer>
      <div>
        <LinkContainer>
          <Links to="/about" activeClassName="active">
            About
          </Links>
          <Links to="/projects" activeClassName="active">
            Projects
          </Links>
          <Links exact to="/" activeClassName="active">
            Contact
          </Links>
        </LinkContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  </GridContainer>
);

export default App;
