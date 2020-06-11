import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    nickName: '',
  },
  reducers: {
    getUser: (state, { payload }) => {
      return {
        ...state,
        nickname: payload,
      };
    },
    clearUser: () => ({
      email: null,
      userId: null,
    }),
  },
});
