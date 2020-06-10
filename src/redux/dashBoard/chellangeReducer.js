import { createSlice } from '@reduxjs/toolkit';

export const chellangeSlice = createSlice({
  name: 'isNewChellange',
  initialState: true,
  reducers: {
    startChellange: state => {
      console.log('cons', !state);
      return !state;
    },
  },
});
