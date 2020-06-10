import React from 'react';
import styles from './modalCard.module.css';

const ModalCard = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h3 className={styles.modalText}>Delete this Quest?</h3>
        <div className={styles.modalBtnContainer}>
          <button className={styles.modalCencelBtn}>CANCEL</button>
          <span className={styles.modalSpan}>|</span>
          <button className={styles.modalDelBtn}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
