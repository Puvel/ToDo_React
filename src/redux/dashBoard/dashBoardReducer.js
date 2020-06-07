import { createSlice } from '@reduxjs/toolkit';

export const dashBoardSlice = createSlice({
  name: 'dashboard',
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
      return {
        ...state,
        today: actualToday,
      };
    },

    updateTomorrow: (state, { payload }) => {
      const actualTomorrow = state.tomorrow.map(item => {
        if (item._id === payload._id) {
          return payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        tomorrow: actualTomorrow,
      };
    },
    updateAllRest: (state, { payload }) => {
      const actualAllRest = state.allRest.map(item => {
        if (item._id === payload._id) {
          return payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        allRest: actualAllRest,
      };
    },
  },
});
