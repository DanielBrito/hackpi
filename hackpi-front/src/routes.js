import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Inclusion from "./views/Inclusion";
import Material from "./views/Material";
import Security from "./views/Security";
import ChildrenSpace from "./views/ChildrenSpace";
import Learning from "./views/Learning";
import Development from "./views/Development";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/inclusion">
        <Inclusion />
      </Route>
      <Route path="/material">
        <Material />
      </Route>
      <Route path="/security">
        <Security />
      </Route>
      <Route path="/children_space">
        <ChildrenSpace />
      </Route>
      <Route path="/learning">
        <Learning />
      </Route>
      <Route path="/development">
        <Development />
      </Route>
    </Switch>
  );
};

export default Routes;
