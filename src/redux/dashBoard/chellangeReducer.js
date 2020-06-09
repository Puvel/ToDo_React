import { createSlice } from "@reduxjs/toolkit";

export const chellangeSlice = createSlice({
  name: "isNewChellange",
  initialState: false,
  reducers: {
    startChellange: state => {
      console.log(state);
      return !state;
    },
  },
});
