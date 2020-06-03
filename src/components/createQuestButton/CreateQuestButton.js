import React from 'react';
import styles from './createQuestButton.module.css';

const CreateQuestButton = ({ handleClick }) => (
  <button className={styles.Button} type="button" onClick={handleClick}>
    +
  </button>
);

export default CreateQuestButton;
