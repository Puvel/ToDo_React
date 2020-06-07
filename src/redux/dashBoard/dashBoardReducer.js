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
    createTask: (state, { payload }) => {
      console.log(payload);
      return { ...state, today: [payload, ...state.today] };
    },
    deleteTask: (state, { payload }) => {
      return { ...state };
    },
    updateTasks: (state, { payload }) => {
      console.log("state", state);
      return {
        ...payload,
      };
    },
    getTasks: (state, { payload }) => {
      console.log("state", state);
      return {
        ...payload,
      };
    },
    updateToday: (state, { payload }) => {
      const actualToday = state.today.map(item => {
        if (item._id === payload._id) {
          console.log(item);
          return payload;
        } else {
          return item;
        }
      });
      console.log(actualToday);
      return {
        ...state,
        today: actualToday,
      };
    },
  },
});
