import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Login from '../components/login/Login';
import { signInUser } from '../redux/token/tokenOperation';
const initialState = {
  nickname: '',
};

export const LoginPage = () => {
  const [state, setstate] = useState(initialState);
  const [isAuth, setAuth] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(signInUser(state));
  };

  const handleChange = ({ target: { name, value } }) => {
    setstate(prev => ({ ...prev, [name]: value }));
  };
  return (
    <>
      {isAuth ? (
        <h1>HOME PAGE</h1>
      ) : (
        <Login
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          state={state}
        />
      )}
    </>
  );
};
