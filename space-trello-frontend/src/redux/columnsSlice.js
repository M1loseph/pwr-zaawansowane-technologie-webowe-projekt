import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    addColumn(state, action) {
      state.push(action.payload);
    },
    removeColumn(state, action) {},
    updateColumn(state, action) {},
  },
});

export const { addColumn, removeColumn, updateColumn } = columnSlice.actions;

export default columnSlice.reducer;
