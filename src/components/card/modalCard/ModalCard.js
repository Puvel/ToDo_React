import React from 'react';
import styles from './modalCard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { newTaskSlice } from '../../../redux/dashBoard/newTaskReduser';

const ModalCard = ({ title, cancel, delite }) => {
  const isNewTask = useSelector(state => state.isNewTask);
  const dispatch = useDispatch();
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
              if (!isNewTask) {
                dispatch(newTaskSlice.actions.startTask());
              }
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
