import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 1,
};

export const tokenSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
  },
});

export const { setUser, deleteUserTable } = tokenSlice.actions;

export default tokenSlice.reducer;
