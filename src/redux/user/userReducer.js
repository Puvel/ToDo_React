import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    userId: null,
  },
  reducers: {
    getUser: (state, { payload }) => ({
      ...state,
      email: payload.email,
      userId: payload.id,
    }),
    clearUser: () => ({
      email: null,
      userId: null,
    }),
  },
});
