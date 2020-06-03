
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import { useRoute } from "./router";

function App() {
  const token = useSelector(state => state.token);
  const isAuth = true;
  console.log(token);
  const routing = useRoute(token);
  return routing;

export default App;
