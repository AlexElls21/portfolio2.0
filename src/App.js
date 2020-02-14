import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import { GlobalStyle } from "./theme";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;

  height: 100vh;
  width: 100vw;
`;

const App = () => (
  <GridContainer>
    <Router>
      <GlobalStyle />
      <div>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  </GridContainer>
);

export default App;
