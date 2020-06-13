import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { editCard } from "../redux/dashBoard/cardOperation";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { tokenSlice } from "../redux/token/tokenReducer";
import { dashBoardSlice } from "../redux/dashBoard/dashBoardReducer";

import Header from "../components/header/Header";
import TodoList from "../components/todoList/TodoList";
import CreateQuestButton from "../components/createQuestButton/CreateQuestButton";

const DashboardPage = () => {
  const today = useSelector(state => state.dashboard.today);
  const tomorrow = useSelector(state => state.dashboard.tomorrow);
  const allRest = useSelector(state => state.dashboard.allRest);
  const done = useSelector(state => state.dashboard.done);
  const [isShow, setIsShow] = useState(true);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(tokenSlice.actions.clearToken());
  };

  const handleCreate = () => {
    dispatch(
      dashBoardSlice.actions.createTask({
        createdAt: "2020-06-07T09:35:56.563Z",
        difficulty: "Easy",
        done: false,
        dueDate: new Date(),
        group: "Productivity",
        isPriority: false,
        isQuest: true,
        name: "Create an account",
        updatedAt: "2020-06-07T09:35:56.563Z",
        userId: "5edcb4fc94684d2asdasd131fe0f00",
        _id: uuidv4(),
        __v: 0,
        onCreate: true,
      }),
    );
  };

  const onDragEnd = (result, columns, setColumns) => {
    console.log(result.destination.droppableId);
  };

  return (
    <>
      <Header handleLogOut={handleLogOut} />
      <DragDropContext
        onDragEnd={result => {
          const today = new Date();
          const time = new Date(today);
          const _id = result.draggableId;
          if (!result.destination) {
            return;
          }
          if (result.destination.droppableId === "DONE") {
            console.log("are you done");
            const done = true;
            dispatch(editCard({ _id, done }));
            return;
          }
          if (result.source.droppableId === "TODAY") {
            if (result.destination.droppableId === "TODAY") {
              console.log("nothing todo");
              return;
            } else if (result.destination.droppableId === "TOMORROW") {
              const dueDate = time.setDate(time.getDate() + 1);
              dispatch(editCard({ dueDate, _id }));
            }
          } else if (result.source.droppableId === "TOMORROW") {
            if (result.destination.droppableId === "TOMORROW") {
              console.log("nothing todo");
              return;
            } else if (result.destination.droppableId === "TODAY") {
              const dueDate = time.setDate(time.getDate());
              dispatch(editCard({ dueDate, _id }));
            }
          }
          console.log(result.source.droppableId);
          console.log(result.destination.droppableId);
        }}>
        <TodoList title="TODAY" tasks={today} />
        <TodoList title="TOMORROW" tasks={tomorrow} />

        <TodoList title="ALL THE REST" tasks={allRest} />
        <TodoList
          title="DONE"
          tasks={done}
          visible
          isShow={isShow}
          handelShow={() => setIsShow(!isShow)}
        />
      </DragDropContext>
      <CreateQuestButton handleCreate={handleCreate} />
    </>
  );
};

export default DashboardPage;
