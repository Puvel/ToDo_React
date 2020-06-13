import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import styles from "./todoList.module.css";
import { Card } from "../card/Card";
import { ChallengeCard } from "../card/ChallengeCard";

const TodoList = ({
  title = "",
  tasks = [],
  visible = null,
  isShow = true,
  handelShow,
}) => {
  const columnId = title;
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
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => {
                return (
                  <ul
                    className={styles.todosSectionList}
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {tasks.map((task, idx) => {
                      if (task.isQuest) {
                        return <Card key={task._id} task={task} idx={idx} />;
                      } else {
                        return (
                          <ChallengeCard key={task._id} task={task} idx={idx} />
                        );
                      }
                    })}
                    {provided.placeholder}
                  </ul>
                );
              }}
            </Droppable>
          ) : (
            <h3 className={styles.notifyText}>No quests or challenges</h3>
          ))}
      </div>
    </section>
  );
};

export default TodoList;
