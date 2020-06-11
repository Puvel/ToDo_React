import React from 'react';
import styles from './modalCard.module.css';

const ModalCard = ({ title, cancel, delite }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h3 className={styles.modalText}>{title}</h3>
        <div className={styles.modalBtnContainer}>
          <button
            onClick={() => {
              cancel();
            }}
            className={styles.modalCencelBtn}>
            CANCEL
          </button>
          <span className={styles.modalSpan}>|</span>
          <button
            onClick={() => {
              delite();
            }}
            className={styles.modalDelBtn}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
