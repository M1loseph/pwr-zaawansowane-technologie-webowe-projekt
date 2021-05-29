import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    updateUser(state, action) {},
  },
});

export const { addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
