import { createSlice } from "@reduxjs/toolkit";

const initialState = "dawdgbj12h3b12jh31237896df8efb";

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTable(state, action) {
      state = action.payload;
    },
  },
});

export const { setTable } = tokenSlice.actions;

export default tokenSlice.reducer;
