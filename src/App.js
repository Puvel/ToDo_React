import React from 'react';
import { LoginPage } from './pages/LoginPage';

function App() {
  const isAuth = true;
  return <>{isAuth ? <LoginPage /> : <h1>Hello Pasha</h1>}</>;
}

export default App;
