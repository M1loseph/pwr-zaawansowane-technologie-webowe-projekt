import { createSlice } from "@reduxjs/toolkit";
import { READY } from "./APIStates";

const initialState = {
  status: READY,
  entity: {
    userId: 1,
    token: "dawdgbj12h3b12jh31237896df8efb",
  },
};

export const tokenSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.status = READY;
      state.entity = action.payload;
    },
  },
});

export const getCurrentUser = (state) => {
  if (state.user.status !== READY) return;
  return state.users.find((u) => u.id === state.user.entity.userId);
};

export const { setUser, deleteUserTable } = tokenSlice.actions;

export default tokenSlice.reducer;
