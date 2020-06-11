import React from 'react';
import styles from './challengeCompleted.module.css';

const ChallengeCompleted = ({ name, handelDoneChellange }) => {
  return (
    <div>
      <div>
        <div className={styles.challengeCompletedTitleWrap}>
          <h2 className={styles.challengeCompletedModalTitle}>Completed:</h2>
          <span className={styles.challengeCompletedModalTitleSpan}>
            {name}
          </span>
        </div>
        <div>
          <div className={styles.challengeCompletedModalImage}></div>
          <button
            className={styles.challengeCompletedModalText}
            onClick={handelDoneChellange}>
            Continue→
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCompleted;
