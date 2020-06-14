import { createSlice } from "@reduxjs/toolkit";

export const newCardSlice = createSlice({
  name: "onCreate",
  initialState: true,
  reducers: {
    createTask: state => {
      console.log(state);
      return state ? false : true;
    },
  },
});
