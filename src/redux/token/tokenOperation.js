import axios from "axios";
import { tokenSlice } from "./tokenReducer";
import { userSlice } from "../user/userReducer";

const getData = data => data.data.data;
const getUser = data => getData(data).user;
const getToken = data => getUser(data)._id;

export const signInUser = params => async (dispatch, getState) => {
  try {
    console.log("dasdsasad");
    const data = await axios.post(
      "https://develop-questify.goit.co.ua/api/auth",
      params,
    );
    console.log(data);
    const status = data.status === 200;
    // console.log(status);
    const tokenValue = getToken(data);
    const nickName = getUser(data).nickname;
    console.log(nickName);
    // const user = data.data.user;
    console.log(tokenValue);
    if (status) {
      console.log(data.data.message);
      console.log(tokenValue);
      dispatch(tokenSlice.actions.getToken({ token: tokenValue }));
      dispatch(userSlice.actions.getUser(nickName));
      //   dispatch(userSlice.actions.getUser({ id: user._id, email: user.email }));
    }
  } catch (err) {
    console.log(err);
  }
};
