import axios from "axios";
import { isToday, isTomorrow } from "../../helpers/functions";
import { dashBoardSlice } from "../dashBoard/dashBoardReducer";
import { updateTasks } from "../dashBoard/dashBoardOperation";

const getData = data => data.data.data;
const getTasks = data => getData(data).tasks;

export const editCard = ({
  _id,
  dueDate,
  name,
  difficulty,
  group,
  done,
  isPriority,
}) => async (dispatch, getState) => {
  // const fart = dueDate.toISOString();
  console.log(done);
  const state = getState();
  try {
    const data = await axios.put(
      `https://questify.goit.co.ua/api/quests/${_id}`,
      { dueDate, name, difficulty, group, done, isPriority },
      { headers: { "content-type": "application/json" } },
    );
    const status = data.status === 201;
    if (status) {
      const actualDate = new Date(data.data.quest.dueDate);
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

export const deleteCard = ({ _id }) => async (dispatch, getState) => {
  const state = getState();
  const nickname = state.user.nickname;
  try {
    const data = await axios.delete(
      `https://questify.goit.co.ua/api/quests/${_id}`,
    );
    const status = data.status === 201;
    if (status) {
      dispatch(updateTasks(nickname));
      // dispatch(dashBoardSlice.actions.deleteTask(_id));
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteChellangeCard = ({ _id, userId }) => async (
  dispatch,
  getState,
) => {
  const state = getState();
  const nickname = state.user.nickname;
  const body = {
    updateFields: { challengeSendToUser: false },
    userId,
  };
  try {
    const data = await axios.put(
      `https://questify.goit.co.ua/api/challenges/${_id}`,
      body,
    );
    const status = data.status === 201;

    if (status) {
      dispatch(updateTasks(nickname));
      // dispatch(dashBoardSlice.actions.deleteTask(_id));
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateChellangeCard = ({
  _id,
  userId,
  difficulty,
  dueDate,
}) => async (dispatch, getState) => {
  const state = getState();
  const nickname = state.user.nickname;
  const body = {
    updateFields: { challengeSendToUser: true, difficulty, dueDate },
    userId,
  };
  try {
    const data = await axios.put(
      `https://questify.goit.co.ua/api/challenges/${_id}`,
      body,
    );
    const status = data.status === 201;
    if (status) {
      dispatch(updateTasks(nickname));
      // dispatch(dashBoardSlice.actions.deleteTask(_id));
    }
  } catch (err) {
    console.log(err);
  }
};

export const completeChellange = ({ _id, userId }) => async (
  dispatch,
  getState,
) => {
  const state = getState();
  const nickname = state.user.nickname;
  try {
    const data = await axios.put(
      `https://questify.goit.co.ua/api/challenges/${_id}`,
      { updateFields: { challengeSendToUser: true, done: true }, userId },
    );
    const status = data.status === 201;
    if (status) {
      dispatch(updateTasks(nickname));
      // dispatch(dashBoardSlice.actions.deleteTask(_id));
    }
  } catch (err) {
    console.log(err);
  }
};
