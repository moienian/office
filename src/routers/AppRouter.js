import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
    </Switch>
  </Router>
);

export default AppRouter;
