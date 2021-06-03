import { createSlice } from "@reduxjs/toolkit";
import { READY, RUNNING, FAILED } from "./APIStates";
import {} from "./userSlice";

const getTableIndexById = (state, id) => {
  return state.tables.findIndex((t) => t.id === id);
};

const indexOk = (index) => {
  return index !== -1;
};

export const tableSlice = createSlice({
  name: "tables",
  initialState: { tables: [] },
  reducers: {
    addTableAPIContainer(state, action) {
      const id = action.payload;
      state.tables.push({
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
        state.tables[i].status = READY;
        state.tables[i].entity = table;
      }
    },
    deleteTable(state, action) {
      const id = action.payload;
      state.tables = state.tables.filter(
        (t) => !(t.id === id && t.status === READY)
      );
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
  return state.tables.tables.find((t) => t.id === id);
};

export const {
  deleteTable,
  addTable,
  fetchingTableFailed,
  addTableAPIContainer,
} = tableSlice.actions;

export default tableSlice.reducer;
