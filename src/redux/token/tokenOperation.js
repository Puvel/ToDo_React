import axios from "axios";
import { tokenSlice } from "./tokenReducer";
import { userSlice } from "../user/userReducer";
import { dashBoardSlice } from "../dashBoard/dashBoardReducer";

const getData = data => data.data.data;
const getUser = data => getData(data).user;
const getToken = data => getUser(data)._id;
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

export const signInUser = params => async (dispatch, getState) => {
  try {
    const data = await axios.post(
      "https://questify.goit.co.ua/api/login",
      params,
    );
    const status = data.status === 200;
    const tokenValue = getToken(data);
    const nickName = getUser(data).nickname;
    const tasks = getTasks(data);
    const dashBoard = {
      today: [],
      tomorrow: [],
      allRest: [],
      done: [],
      challange: [],
    };

    const reduxTasks = tasks.map(task => {
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
      dispatch(userSlice.actions.getUser(nickName));
      console.log(data.data.message);
      dispatch(tokenSlice.actions.getToken({ token: tokenValue }));
      dispatch(dashBoardSlice.actions.getTasks(dashBoard));
    }
  } catch (err) {
    console.log(err);
  }
};
