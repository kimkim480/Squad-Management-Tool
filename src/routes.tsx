import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from './page/Dashboard';
import CreateTeam from './page/creatTeam';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create" component={CreateTeam} />
      </Switch>
    </BrowserRouter>
  );
}
