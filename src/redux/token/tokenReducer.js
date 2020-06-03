import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: null,
  reducers: {
    getToken: (state, { payload }) => payload.token,
    clearToken: () => null,
  },
});
