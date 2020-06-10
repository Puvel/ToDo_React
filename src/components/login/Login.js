import React from "react";
import styles from "./login.module.css";

const Login = ({ handleSubmit, handleChange, state }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.column}`}>
        <section className={styles.loginWrapper}>
          <div className={styles.overlayBG}>
            <h1 className={styles.title}>Questifiy</h1>
            <p className={styles.ladingText}>
              Questify will turn your life into a thrilling game full of amazing
              quests and exciting challenges.
            </p>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputSectionWrapper}>
                <p className={styles.loginCaption}>
                  Choose your name to sign up or log in
                </p>
                <input
                  className={styles.input}
                  name="nickname"
                  type="text"
                  placeholder="|"
                  onChange={handleChange}
                  value={state.login}
                />
                <button className={styles.loginBtn} type="submit">
                  Go!
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
