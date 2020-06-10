import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Budget from "../budget"


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Budget />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
