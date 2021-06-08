import { createSlice } from "@reduxjs/toolkit";
import { FAILED, READY, RUNNING } from "./APIStates";

const initialState = { columns: [] };

const getColumndIndexById = (state, id) => {
  return state.columns.findIndex((c) => c.id === id);
};

const indexOk = (i) => {
  return i !== -1;
};

export const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    addColumnAPIContainer(state, action) {
      const id = action.payload;
      state.columns.push({
        id,
        status: RUNNING,
        entity: null,
      });
    },
    addColumn(state, action) {
      const column = action.payload;
      const { columnId } = column;
      const i = getColumndIndexById(state, columnId);
      if (indexOk(i)) {
        state.columns[i].entity = column;
        state.columns[i].status = READY;
      }
    },
    removeColumn(state, action) {},
    updateColumn(state, action) {},
    fetchingColumnFailed(state, action) {
      const id = action.payload;
      const i = getColumndIndexById(state, id);
      if (indexOk(i)) {
        state.columns[i].status = FAILED;
      }
    },
  },
});

export const {
  addColumnAPIContainer,
  addColumn,
  removeColumn,
  updateColumn,
  fetchingColumnFailed,
} = columnSlice.actions;

export default columnSlice.reducer;
