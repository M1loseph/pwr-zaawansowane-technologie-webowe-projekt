import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "./userSlice";

export const fetchTable = createAsyncThunk("tables/fetchTable", async (id) => {
  const response = await fetch(`/api/board/${id}`);
  return await response.json();
});

export const tableSlice = createSlice({
  name: "tables",
  initialState: [],
  reducers: {
    addTable(state, action) {
      state.push(action.payload);
    },
    removeTable(state, action) {
      const id = action.payload;
      state = state.filter((t) => t.boardId !== id);
    },
    updateTable(state, action) {},
  },
  extraReducers: {
    [fetchTable.fulfilled]: (state, action) => {
      const { boardId } = action.payload;
      const index = state.findIndex((t) => t.boardId === boardId);
      if (index !== -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
    [fetchTable.rejected]: (state, action) => {
      console.error("BAD REQUEST");
    },
  },
});

export const { setTable, removeTable, addTable } = tableSlice.actions;

export default tableSlice.reducer;
