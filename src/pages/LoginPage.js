import React, { useState } from 'react';
import Login from '../components/login/Login';

const initialState = {
  login: '',
};

export const LoginPage = () => {
  const [state, setstate] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    setstate((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      state={state}
    />
  );
};
