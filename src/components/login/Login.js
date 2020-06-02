import React from 'react';
import styles from './login.module.css';

const Login = ({ handleSubmit, handleChange, state }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div className={`container ${styles.column}`}>
        <section className={styles.loginWrapper}>
          <div>
            <h1 className={styles.title}>Questifiy</h1>
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
        </section>
        <div className={styles.square}></div>
      </div>
    </div>
  );
};

export default Login;
