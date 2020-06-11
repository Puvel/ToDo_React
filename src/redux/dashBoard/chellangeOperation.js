import axios from 'axios';
import { isToday, isTomorrow } from '../../helpers/functions';
import { dashBoardSlice } from '../dashBoard/dashBoardReducer';

const getData = data => data.data.data;
const getTasks = data => getData(data).tasks;

export const editChellangeStatus = _id => async (dispatch, getState) => {
  const state = getState();

  try {
    const body = {
      updateFields: { challengeSendToUser: true },
    };
    const data = await axios.put(
      `https://questify.goit.co.ua/api/challenges/${_id}`,
      JSON.stringify(body),
      { headers: { 'content-type': 'application/json' } },
    );

    const status = data.status === 201;

    if (status) {
      const addTaskFunc = async params => {
        try {
          const userName = { nickname: params };
          const data = await axios.post(
            'https://questify.goit.co.ua/api/login',
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
              return dashBoard.done.push(task);
            } else {
              const actualDate = new Date(task.dueDate);
              if (isToday(actualDate)) {
                return dashBoard.today.push(task);
              } else if (isTomorrow(actualDate)) {
                return dashBoard.tomorrow.push(task);
              } else {
                return dashBoard.allRest.push(task);
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
