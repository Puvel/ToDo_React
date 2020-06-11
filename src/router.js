import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

export const useRoute = token => {
  if (!token) {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};
