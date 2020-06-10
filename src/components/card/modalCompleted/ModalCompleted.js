import React from "react";
import styles from "./modalCompleted.module.css";

const ModalCompleted = ({ name, handleContinuteDone }) => {
  return (
    <div>
      <div>
        <h2 className={styles.completeModalTitle}>
          Ceompleted:
          <span className={styles.completeModalTitleSpan}>{name}</span>
        </h2>
        <div>
          {/* <button onClick={() => {}}>CANCEL</button> */}
          <div className={styles.completeModalImage}></div>
          <button
            className={styles.completeModalText}
            onClick={handleContinuteDone}>
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCompleted;
