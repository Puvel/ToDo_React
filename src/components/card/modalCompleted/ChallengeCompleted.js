import React from 'react';
import styles from './challengeCompleted.module.css';

const ChallengeCompleted = ({ name, handelDoneChellange }) => {
  return (
    <div>
      <div>
        <h2 className={styles.challengeCompletedModalTitle}>
          Completed:
          <span className={styles.challengeCompletedModalTitleSpan}>
            {name}
          </span>
        </h2>
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
