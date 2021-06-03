import { createSlice } from "@reduxjs/toolkit";
import { READY, RUNNING, FAILED } from "./APIStates";
import {} from "./userSlice";

const getTableIndexById = (state, id) => {
  return state.findIndex((t) => t.id === id);
};

const indexOk = (index) => {
  return index !== -1;
};

export const tableSlice = createSlice({
  name: "tables",
  initialState: [],
  reducers: {
    addTableAPIContainer(state, action) {
      const id = action.payload;
      state.push({
        id,
        status: RUNNING,
        entity: null,
      });
    },
    addTable(state, action) {
      const table = action.payload;
      const { boardId } = table;
      const i = getTableIndexById(state, boardId);
      if (indexOk(i)) {
        state[i].status = READY;
        state[i].entity = table;
      }
    },
    removeTable(state, action) {
      const id = action.payload;
      state = state.filter((t) => t.id !== id);
    },
    updateTable(state, action) {},
    fetchingTableFailed(state, action) {
      const id = action.payload;
      const i = getTableById(state, id);
      if (indexOk(i)) {
        state[i].status = FAILED;
      }
    },
  },
});

export const getTableById = (state, id) => {
  return state.tables.find((t) => t.id === id);
};

export const {
  removeTable,
  addTable,
  fetchingTableFailed,
  addTableAPIContainer,
} = tableSlice.actions;

export default tableSlice.reducer;
