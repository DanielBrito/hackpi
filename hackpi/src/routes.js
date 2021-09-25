import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Family from "./views/Family";
import Inclusion from "./views/Inclusion";
import Material from "./views/Material";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/family">
        <Family />
      </Route>
      <Route path="/inclusion">
        <Inclusion />
      </Route>
      <Route path="/Material">
        <Material />
      </Route>
    </Switch>
  );
};

export default Routes;
