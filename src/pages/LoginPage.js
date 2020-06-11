import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/login/Login';
import { signInUser } from '../redux/token/tokenOperation';
const initialState = {
  nickname: '',
};

export const LoginPage = () => {
  const [state, setstate] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(signInUser(state));
  };

  const handleChange = ({ target: { name, value } }) => {
    setstate(prev => ({ ...prev, [name]: value }));
  };
  return (
    <Login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      state={state}
    />
  );
};
