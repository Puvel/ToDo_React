import { createSlice } from "@reduxjs/toolkit";

export const chellangeSlice = createSlice({
  name: "isNewChellange",
  initialState: true,
  reducers: {
    startChellange: state => {
      return false;
    },
    deleteChellange: state => {
      return true;
    },
  },
});
