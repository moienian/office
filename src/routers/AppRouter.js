import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";

const AppRoter = () => {
  <Router>
    <Route path="/" component={DashboardPage} exact />
  </Router>;
};

export default AppRoter;
