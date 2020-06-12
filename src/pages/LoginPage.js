import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/login/Login';
import { signInUser } from '../redux/token/tokenOperation';
import Progress from '../components/loader/Progress';

const callFakeAPI = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });
const initialState = {
  nickname: '',
};

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setstate] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await callFakeAPI(500);
      setIsLoading(false);
    })();
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(signInUser(state));
  };

  const handleChange = ({ target: { name, value } }) => {
    setstate(prev => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <Progress isAnimating={isLoading} />
      <Login
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        state={state}
      />
    </>
  );
};

export default LoginPage;
