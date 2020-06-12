import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);

const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: "DashboardPage" */),
);

export const useRoute = token => {
  if (!token) {
    return (
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect to="/dashboard" />
      </Switch>
    </Suspense>
  );
};
