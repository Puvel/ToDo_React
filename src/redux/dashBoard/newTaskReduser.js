import { createSlice } from '@reduxjs/toolkit';

export const newTaskSlice = createSlice({
  name: 'isNewTask',
  initialState: true,
  reducers: {
    startTask: state => {
      return true;
    },
    cancelTask: state => {
      return false;
    },
  },
});
