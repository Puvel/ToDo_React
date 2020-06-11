import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { tokenSlice } from '../redux/token/tokenReducer';
import { dashBoardSlice } from '../redux/dashBoard/dashBoardReducer';

import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';
import CreateQuestButton from '../components/createQuestButton/CreateQuestButton';
import { v4 as uuidv4 } from 'uuid';

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
        createdAt: '2020-06-07T09:35:56.563Z',
        difficulty: 'Easy',
        done: false,
        dueDate: new Date(),
        group: 'Productivity',
        isPriority: false,
        isQuest: true,
        name: 'Create an account',
        updatedAt: '2020-06-07T09:35:56.563Z',
        userId: '5edcb4fc94684d2asdasd131fe0f00',
        _id: uuidv4(),
        __v: 0,
        onCreate: true,
      }),
    );
  };

  return (
    <>
      <Header handleLogOut={handleLogOut} />
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
      <CreateQuestButton handleCreate={handleCreate} />
    </>
  );
};

export default DashboardPage;
