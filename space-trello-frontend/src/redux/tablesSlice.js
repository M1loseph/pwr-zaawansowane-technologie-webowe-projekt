import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    addTable(state, action) {
      state.push(action.payload);
    },
    removeTable(state, action) {},
    updateTable(state, action) {},
  },
});

export const { setTable } = tableSlice.actions;

export default tableSlice.reducer;
