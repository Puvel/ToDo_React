import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export const useRoute = token => {
  if (!token) {
    return (
      <Switch>
        <Route path="/" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};
