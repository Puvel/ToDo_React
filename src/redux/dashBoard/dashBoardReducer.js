import { createSlice } from "@reduxjs/toolkit";

export const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: {
    today: [],
    tomorrow: [],
    allRest: [],
    done: [],
    challenge: [],
  },
  reducers: {
    getTasks: (state, { payload }) => ({
      ...payload,
    }),
  },
});
