import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import AddProjectPage from "../components/AddProjectPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/add" component={AddProjectPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
