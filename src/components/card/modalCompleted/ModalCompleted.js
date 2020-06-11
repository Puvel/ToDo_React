import React from 'react';
import styles from './modalCompleted.module.css';

const ModalCompleted = ({ name, handleContinuteDone }) => {
  return (
    <div>
      <div>
        <div className={styles.completeTitleWrap}>
          <h2 className={styles.completeModalTitle}>Completed:</h2>
          <span className={styles.completeModalTitleSpan}>{name}</span>
        </div>
        <div>
          <div className={styles.completeModalImage}></div>
          <button
            className={styles.completeModalText}
            onClick={handleContinuteDone}>
            Continue→
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCompleted;
