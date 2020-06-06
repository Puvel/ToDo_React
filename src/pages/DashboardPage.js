import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { tokenSlice } from '../redux/token/tokenReducer';
import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';
import CreateQuestButton from '../components/createQuestButton/CreateQuestButton';

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
      <CreateQuestButton />
    </>
  );
};

export default DashboardPage;
