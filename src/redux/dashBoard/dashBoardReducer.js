import { createSlice } from "@reduxjs/toolkit";

export const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: {
    today: [],
  },
  reducers: {
    getTasks: (state, { payload }) => ({
      ...state,
    }),
  },
});
