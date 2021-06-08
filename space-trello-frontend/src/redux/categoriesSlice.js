import { createSlice } from "@reduxjs/toolkit";
import { FAILED, READY, RUNNING } from "./APIStates";

const getCategoryIndexById = (state, id) => {
  return state.categories.findIndex((c) => c.id === id);
};

const indexOk = (i) => i !== -1;

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: { categories: [] },
  reducers: {
    createCategoriesAPIContainer(state, action) {
      const id = action.payload;
      state.categories.push({
        id,
        status: RUNNING,
        entity: null,
      });
    },
    addCategory(state, action) {
      const category = action.payload;
      const { labelId } = category;
      const i = getCategoryIndexById(state, labelId);
      if (indexOk(i)) {
        state.categories[i].entity = category;
        state.categories[i].status = READY;
      }
    },
    removeCategory(state, action) {},
    updateCategory(state, action) {},
    fetchingCategoryFailed(state, action) {
      const id = action.payload;
      const i = getCategoryIndexById(state, id);
      if (indexOk(i)) {
        state.categories[i].status = FAILED;
      }
    },
  },
});

export const {
  addCategory,
  removeCategory,
  updateCategory,
  createCategoriesAPIContainer,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
