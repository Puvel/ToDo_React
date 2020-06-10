import { createSlice } from '@reduxjs/toolkit';

export const chellangeSlice = createSlice({
  name: 'isNewChellange',
  initialState: true,
  reducers: {
    startChellange: state => {
      return !state;
    },
    deleteChellange: state => {
      console.log('dispatch')
      console.log('cons', !state);
      return true;
    },
  },
});
