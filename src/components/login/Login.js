import React from 'react';

const Login = ({ handleSubmit, handleChange, state }) => {
  return (
    <main className="login-wrapper">
      <div>
        <h1>LOGIN PAGE</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          accusamus delectus dicta quidem perferendis impedit at accusantium
          doloribus eos molestias.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            name="login"
            placeholder="login"
            type="text"
            onChange={handleChange}
            value={state.login}
          />
          <button type="submit">login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
