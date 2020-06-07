import axios from "axios";
import * as helpers from "../../helpers/functions";
import { dashBoardSlice } from "../dashBoard/dashBoardReducer";
import { updateTasks } from "../dashBoard/dashBoardOperation";

export const editCard = ({ _id, dueDate, name, difficulty, group }) => async (
  dispatch,
  getState,
) => {
  try {
    console.log(_id);
    const data = await axios.put(
      `https://questify.goit.co.ua/api/quests/${_id}`,
      { dueDate, name, difficulty, group },
      { headers: { "content-type": "application/json" } },
    );
    const status = data.status === 201;
    console.log(data);
    // set data to redux according to today or tomorrow ....
    if (status) {
      console.log(data.data.message);
      const actualDate = new Date(data.data.quest.dueDate);
      console.log(helpers.isToday(actualDate));
      const dispatchByDate = () => {
        if (helpers.isToday(actualDate)) {
          console.log("sadasdas");

          dispatch(dashBoardSlice.actions.updateToday(data.data.quest));
        }
      };

      // dispatch(userSlice.actions.getUser({ id: user._id, email: user.email }));
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteCard = ({ _id }) => async (dispatch, getState) => {
  const state = getState();
  console.log("state", state.user.nickname);
  const nickname = state.user.nickname;
  try {
    const data = await axios.delete(
      `https://questify.goit.co.ua/api/quests/${_id}`,
    );
    const status = data.status === 201;
    console.log(data);
    if (status) {
      console.log(data.data.message);
      dispatch(updateTasks(nickname));
      // dispatch(dashBoardSlice.actions.deleteTask(_id));
    }
  } catch (err) {
    console.log(err);
  }
};
