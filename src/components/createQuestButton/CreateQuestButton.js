import React from 'react';
import styles from './createQuestButton.module.css';

const CreateQuestButton = ({ handleCreate }) => (
  <button className={styles.Button} type="button" onClick={handleCreate}>
    +
  </button>
);

export default CreateQuestButton;
