import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { deleteChellangeCard } from "../redux/dashBoard/cardOperation";
import { newCardSlice } from "../redux/dashBoard/newCardReducer";
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
  const allTasks = [...today, ...tomorrow, ...allRest];
  const onCreate = useSelector(state => state.onCreate);

  const handleLogOut = () => {
    dispatch(tokenSlice.actions.clearToken());
  };

  const handleCreate = () => {
    if(!onCreate){
      return
    }
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

    // cancel create
    dispatch(newCardSlice.actions.createTask());
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
          const isChellange = allTasks.find(item => {
            return item._id === result.draggableId;
          });
          if (isChellange && result.destination.droppableId === "DONE") {
            console.log("chellange");
            const userId = isChellange.userId;
            dispatch(deleteChellangeCard({ _id, userId }));

            return;
          }

          if (result.destination.droppableId === result.source.droppableId) {
            return;
          }
          if (result.destination.droppableId === "DONE") {
            console.log("are you done");
            const done = true;
            dispatch(editCard({ _id, done }));
            return;
          }
          // TODAY TOMORROW
          if (
            result.source.droppableId === "TODAY" &&
            result.destination.droppableId === "TOMORROW"
          ) {
            const dueDate = time.setDate(time.getDate() + 1);
            dispatch(editCard({ dueDate, _id }));
          }
          // TODAY ALL THE REST
          if (
            result.source.droppableId === "TODAY" &&
            result.destination.droppableId === "ALL THE REST"
          ) {
            const dueDate = time.setDate(time.getDate() + 2);
            dispatch(editCard({ dueDate, _id }));
          }
          // TOMORROW TODAY
          if (
            result.source.droppableId === "TOMORROW" &&
            result.destination.droppableId === "TODAY"
          ) {
            const dueDate = time.setDate(time.getDate());
            dispatch(editCard({ dueDate, _id }));
          }
          // TOMORROW ALL THE REST
          if (
            result.source.droppableId === "TOMORROW" &&
            result.destination.droppableId === "ALL THE REST"
          ) {
            const dueDate = time.setDate(time.getDate() + 3);
            dispatch(editCard({ dueDate, _id }));
          }
          //  ALL THE REST TODAY
          if (
            result.source.droppableId === "ALL THE REST" &&
            result.destination.droppableId === "TODAY"
          ) {
            const dueDate = time.setDate(time.getDate());
            dispatch(editCard({ dueDate, _id }));
          }

          //  ALL THE REST TOMORROW
          if (
            result.source.droppableId === "ALL THE REST" &&
            result.destination.droppableId === "TOMORROW"
          ) {
            const dueDate = time.setDate(time.getDate() + 1);
            dispatch(editCard({ dueDate, _id }));
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
