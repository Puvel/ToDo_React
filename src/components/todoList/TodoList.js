import React, { Component } from 'react';
import styles from './todoList.module.css';
import Card from '../card/Card';

class TodoList extends Component {
  state = { isShow: true };

  handleClick = () => {
    this.setState(state => ({
      isShow: !state.isShow,
    }));
  };
  render() {
    const { title, tasks = [], visible = null } = this.props;
    const { isShow } = this.state;
    return (
      <section className={`container ${styles.todosSection}`}>
        <div className={styles.todosSectionContainer}>
          <div className={visible ? styles.borderWrapVis : styles.borderWrap}>
            <div className={styles.todosSectionWrap}>
              <h2 className={styles.todosSectionTitle}>{title}</h2>
              {visible && (
                <button
                  onClick={this.handleClick}
                  className={
                    isShow ? styles.todosSectionBtn : styles.todosSectionBtnHide
                  }></button>
              )}
            </div>
          </div>
          {tasks.length > 0 ? (
            isShow && (
              <ul className={styles.todosSectionList}>
                {tasks.map(task => (
                  <Card key={task._id} task={task} />
                ))}
              </ul>
            )
          ) : (
            <h3 className={styles.notifyText}>No quests or challenges</h3>
          )}
        </div>
      </section>
    );
  }
}

export default TodoList;

// const TodoList = ({ title, tasks = [], visible = null, isShow = true }) => (

// );

// export default TodoList;
