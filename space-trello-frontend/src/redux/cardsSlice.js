import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action) {
      state.push(action.payload);
    },
    removeCard(state, action) {},
    updateCard(state, action) {},
  },
});

export const { addCard, removeCard, updateCard } = cardsSlice.actions;

export default cardsSlice.reducer;
