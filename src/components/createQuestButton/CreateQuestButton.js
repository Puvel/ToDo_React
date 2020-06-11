import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './createQuestButton.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import { newTaskSlice } from '../../redux/dashBoard/newTaskReduser';

const CreateQuestButton = ({ handleCreate }) => {
  const isNewTask = useSelector(state => state.isNewTask);
  const dispatch = useDispatch();
  return (
    <Tooltip title="Create a new card" placement="top">
      <button
        className={styles.Button}
        type="button"
        onClick={() => {
          if (!isNewTask) {
            console.log('false');
            return;
          } else {
            handleCreate();
            dispatch(newTaskSlice.actions.cancelTask());
          }
        }}>
        +
      </button>
    </Tooltip>
  );
};

export default CreateQuestButton;
