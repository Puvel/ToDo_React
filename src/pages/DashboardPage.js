import React from 'react';

import { useDispatch } from 'react-redux';
import { tokenSlice } from '../redux/token/tokenReducer';
import TodoList from '../components/todoList/TodoList';
import CreateQuestButton from '../components/createQuestButton/CreateQuestButton';

const tasks = [
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db780d491967e5805',
    name: 'Create an account',
    group: 'Productivity',
    difficulty: 'Easy',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.200Z',
    updatedAt: '2020-06-02T11:54:00.200Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db780d491967e5815',
    name: 'Complete 3 quests',
    group: 'Productivity',
    difficulty: 'Hard',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db780dv491967e58247',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db78n0d491967e5824',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db780nd491967e5824',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db780d491967e5835',
    name: 'Accept a challenge',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2021-03-09T12:54:00.195Z',
    done: false,
    isQuest: false,
    challengeSendToUser: false,
    _id: '5ed63dd8db780d491967e5ab4',
    name: 'Do 3 morning runs this week',
    group: 'Sport',
    difficulty: 'Hard',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.220Z',
    updatedAt: '2020-06-02T11:54:00.220Z',
  },
];

const tasks1 = [
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db7gvjhjv80d491967e5805',
    name: 'Create an account',
    group: 'Productivity',
    difficulty: 'Easy',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.200Z',
    updatedAt: '2020-06-02T11:54:00.200Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8dbvgjh780d491967e5815',
    name: 'Complete 3 quests',
    group: 'Productivity',
    difficulty: 'Hard',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8db7vgjvj80dv491967e58247',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8dbvgj78n0d491967e5824',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8dvgjvgjb780nd491967e5824',
    name: 'Create your first quest',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2020-06-02T11:54:00.195Z',
    done: false,
    isQuest: true,
    isPriority: false,
    _id: '5ed63dd8dbcj780d491967e5835',
    name: 'Accept a challenge',
    group: 'Learning',
    difficulty: 'Normal',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.201Z',
    updatedAt: '2020-06-02T11:54:00.201Z',
  },
  {
    dueDate: '2021-03-09T12:54:00.195Z',
    done: false,
    isQuest: false,
    challengeSendToUser: false,
    _id: '5ed63dd8dcfjhcb780d491967e5ab4',
    name: 'Do 3 morning runs this week',
    group: 'Sport',
    difficulty: 'Hard',
    userId: '5ed63dd8db780d491967e57e',
    __v: 0,
    createdAt: '2020-06-02T11:54:00.220Z',
    updatedAt: '2020-06-02T11:54:00.220Z',
  },
];

const DashboardPage = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(tokenSlice.actions.clearToken());
  };

  return (
    <>
      <button onClick={handleLogOut}>Exit</button>
      <TodoList title="TODAY" tasks={tasks} />
      <TodoList title="TOMORROW" tasks={tasks1} />
      <TodoList title="DONE" tasks={tasks1} visible />
      <CreateQuestButton />
    </>
  );
};

export default DashboardPage;
