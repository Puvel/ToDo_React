import React from 'react';
import styles from './createQuestButton.module.css';
import Tooltip from '@material-ui/core/Tooltip';

const CreateQuestButton = ({ handleCreate }) => (
  <Tooltip title="Create a new card" placement="top">
    <button className={styles.Button} type="button" onClick={handleCreate}>
      +
    </button>
  </Tooltip>
);

export default CreateQuestButton;
