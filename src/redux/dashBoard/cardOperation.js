import axios from "axios";

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
    const status = data.data.status === "success";
    const tokenValue = data.data.token;
    const user = data.data.user;
    console.log(data);
    // set data to redux according to today or tomorrow ....
    if (status) {
      // dispatch(tokenSlice.actions.getToken({ token: tokenValue }));
      // dispatch(userSlice.actions.getUser({ id: user._id, email: user.email }));
    }
  } catch (err) {
    console.log(err);
  }
};
