import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../redux/dashBoard/cardOperation";
import styles from "./modalCard.module.css";

const ModalCard = ({ state, setDelete }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h3 className={styles.modalText}>Delete this Quest?</h3>
        <div className={styles.modalBtnContainer}>
          <button
            onClick={() => {
              setDelete(false);
            }}
            className={styles.modalCencelBtn}>
            CANCEL
          </button>
          <span className={styles.modalSpan}>|</span>
          <button
            onClick={() => {
              dispatch(deleteCard(state));
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
