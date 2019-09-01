import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
