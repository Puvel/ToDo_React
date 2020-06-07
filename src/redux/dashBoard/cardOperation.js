import axios from "axios";
import * as helpers from "../../helpers/functions";
import { dashBoardSlice } from "../dashBoard/dashBoardReducer";
import { updateTasks } from "../dashBoard/dashBoardOperation";

export const editCard = ({ _id, dueDate, name, difficulty, group }) => async (
  dispatch,
  getState,
) => {
  try {
    const data = await axios.put(
      `https://questify.goit.co.ua/api/quests/${_id}`,
      { dueDate, name, difficulty, group },
      { headers: { 'content-type': 'application/json' } },
    );
    const status = data.status === 201;
    // set data to redux according to today or tomorrow ....
    if (status) {
      const actualDate = new Date(data.data.quest.dueDate);
      const dispatchByDate = () => {
        if (helpers.isToday(actualDate)) {
          dispatch(dashBoardSlice.actions.updateToday(data.data.quest));
        } else if (helpers.isTomorrow(actualDate)) {
          dispatch(dashBoardSlice.actions.updateTomorrow(data.data.quest));
        } else {
          dispatch(dashBoardSlice.actions.updateAllRest(data.data.quest));
        }
      };
      dispatchByDate();
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
