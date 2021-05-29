import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.push(action);
    },
    removeCategory(state, action) {},
    updateCategory(state, action) {},
  },
});

export const { addCategory, removeCategory, updateCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
