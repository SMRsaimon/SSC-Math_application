import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
