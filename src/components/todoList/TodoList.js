import React from 'react';
import styles from './todoList.module.css';
import { Card } from '../card/Card';

const TodoList = ({
  title = '',
  tasks = [],
  visible = null,
  isShow = true,
  handelShow,
}) => {
  return (
    <section className={`container ${styles.todosSection}`}>
      <div className={styles.todosSectionContainer}>
        <div className={visible ? styles.borderWrapVis : styles.borderWrap}>
          <div className={styles.todosSectionWrap}>
            <h2 className={styles.todosSectionTitle}>{title}</h2>
            {visible && (
              <button
                onClick={handelShow}
                className={
                  isShow ? styles.todosSectionBtn : styles.todosSectionBtnHide
                }></button>
            )}
          </div>
        </div>
        {isShow &&
          (tasks.length > 0 ? (
            <ul className={styles.todosSectionList}>
              {tasks.map(task => (
                <Card key={task._id} task={task} />
              ))}
            </ul>
          ) : (
            <h3 className={styles.notifyText}>No quests or challenges</h3>
          ))}
      </div>
    </section>
  );
};

export default TodoList;
