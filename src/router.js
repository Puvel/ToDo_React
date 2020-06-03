import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";

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
      <Route exact path="/dashboard" component={<h1>home page</h1>} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};
