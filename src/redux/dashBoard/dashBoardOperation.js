import axios from "axios";
import { dashBoardSlice } from "../dashBoard/dashBoardReducer";

const getData = data => data.data.data;
const getTasks = data => getData(data).tasks;

const isToday = date => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isTomorrow = date => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() + 1 &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const updateTasks = params => async (dispatch, getState) => {
  try {
    const userName = { nickname: params };
    const data = await axios.post(
      "https://questify.goit.co.ua/api/login",
      userName,
    );
    const status = data.status === 200;
    const tasks = getTasks(data);
    const dashBoard = {
      today: [],
      tomorrow: [],
      allRest: [],
      done: [],
      challange: [],
    };

    const reduxTasks = tasks.map(task => {
      console.log(task);
      if (task.done) {
        dashBoard.done.push(task);
      } else {
        const actualDate = new Date(task.dueDate);
        if (isToday(actualDate)) {
          dashBoard.today.push(task);
        } else if (isTomorrow(actualDate)) {
          dashBoard.tomorrow.push(task);
        } else {
          dashBoard.allRest.push(task);
        }
      }
    });
    if (status) {
      dispatch(dashBoardSlice.actions.updateTasks(dashBoard));
    }
  } catch (err) {
    console.log(err);
  }
};

export const createTask = params => async (dispatch, getState) => {
  const state = getState();
  console.log(state.user.nickname);
  const userId = state.token;
  const newTaskData = { ...params, userId };
  delete newTaskData._id;
  console.log(newTaskData);

  try {
    console.log("we are here");
    const data = await axios.post(
      "https://questify.goit.co.ua/api/quests",
      newTaskData,
    );
    const status = data.status === 201;
    console.log(status);
    if (status) {
      const addTaskFunc = async params => {
        try {
          const userName = { nickname: params };
          const data = await axios.post(
            "https://questify.goit.co.ua/api/login",
            userName,
          );
          const status = data.status === 200;
          const tasks = getTasks(data);
          const dashBoard = {
            today: [],
            tomorrow: [],
            allRest: [],
            done: [],
            challange: [],
          };

          tasks.map(task => {
            console.log(task);
            if (task.done) {
              dashBoard.done.push(task);
            } else {
              const actualDate = new Date(task.dueDate);
              if (isToday(actualDate)) {
                dashBoard.today.push(task);
              } else if (isTomorrow(actualDate)) {
                dashBoard.tomorrow.push(task);
              } else {
                dashBoard.allRest.push(task);
              }
            }
          });
          if (status) {
            dispatch(dashBoardSlice.actions.updateTasks(dashBoard));
          }
        } catch (err) {
          console.log(err);
        }
      };
      addTaskFunc(state.user.nickname);
    }
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
