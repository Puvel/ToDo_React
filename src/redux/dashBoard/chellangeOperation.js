import axios from "axios";
import * as helpers from "../../helpers/functions";
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

export const editChellangeStatus = _id => async (dispatch, getState) => {
  const state = getState();
  console.log(state.user.nickname);
  try {
    const body = {
      updateFields: { challengeSendToUser: true },
    };
    const data = await axios.put(
      `https://questify.goit.co.ua/api/challenges/${_id}`,
      JSON.stringify(body),
      { headers: { "content-type": "application/json" } },
    );
    console.log(data);
    const status = data.status === 201;
    console.log(status);
    // set data to redux according to today or tomorrow ....
    if (status) {
      const actualDate = new Date(data.data.challenge.dueDate);
      const addTaskFunc = async params => {
        try {
          const userName = { nickname: params };
          const data = await axios.post(
            "https://questify.goit.co.ua/api/login",
            userName,
          );
          const status = data.status === 200;
          const tasks = await getTasks(data);
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
  } catch (err) {
    console.log(err);
  }
};
