import React from "react";
import { LoginPage } from "./pages/LoginPage";
import { useRoute } from "./router";

function App() {
  const isAuth = true;
  const routing = useRoute(isAuth);
  return { routing };
  // return <>{isAuth ? <LoginPage /> : <h1>Hello Pasha</h1>}</>;
}

export default App;
