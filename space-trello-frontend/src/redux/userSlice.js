import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const tokenSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
  },
});

export const { setUser } = tokenSlice.actions;

export default tokenSlice.reducer;
