import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import { GlobalStyle } from "./theme";

const App = () => (
  <div>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
