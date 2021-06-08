import { createSlice } from "@reduxjs/toolkit";
import { FAILED, READY, RUNNING } from "./APIStates";

const getCardIndexById = (state, id) => {
  return state.cards.findIndex((c) => c.id === id);
};

const indexOk = (i) => {
  return i !== -1;
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards: [] },
  reducers: {
    createCardAPIContainer(state, action) {
      const id = action.payload;
      state.cards.push({
        id,
        status: RUNNING,
        entity: null,
      });
    },
    addCard(state, action) {
      const card = action.payload;
      const { cardId } = card;
      const i = getCardIndexById(state, cardId);
      if (indexOk(i)) {
        state.cards[i].status = READY;
        state.cards[i].entity = card;
      }
    },
    removeCard(state, action) {},
    updateCard(state, action) {},
    fetchingCardFailed(state, action) {
      const id = action.payload;
      const i = getCardIndexById(state, id);
      if (indexOk(i)) {
        state.cards[i].status = FAILED;
      }
    },
  },
});

export const {
  addCard,
  removeCard,
  updateCard,
  createCardAPIContainer,
  fetchingCardFailed,
} = cardsSlice.actions;

export default cardsSlice.reducer;
