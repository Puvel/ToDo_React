import React from "react";

const TodoJSX = () => {
  return (
    <ul
      className={styles.todosSectionList}
      {...provided.droppableProps}
      ref={provided.innerRef}>
      {tasks.map((task, idx) => {
        if (task.isQuest) {
          return <Card key={task._id} task={task} idx={idx} />;
        } else {
          return <ChallengeCard key={task._id} task={task} idx={idx} />;
        }
      })}
      {provided.placeholder}
    </ul>
  );
};

export default TodoJSX;
