import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    userId: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    email: "test@test.edu",
    password: "password",
    preferredColor: "#FFB6C1",
    avatar: "test.jpg",
    ownedBoards: [1],
    collaborationBoards: [2],
    assignments: [3, 2, 1],
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    updateUser(state, action) {
      const { userId } = action.payload;
      const i = state.findIndex((u) => u.userId === userId);
      if (i !== -1) {
        state[i] = action.payload;
      }
    },
    deleteUserTable(state, action) {
      const { userId, tableId } = action.payload;
      const user = state.find((u) => u.userId === userId);
      user.ownedBoards = user.ownedBoards.filter((t) => {
        return t !== tableId;
      });
    },
    addUserTable(state, action) {
      const { userId, tableId } = action.payload;
      const user = state.find((u) => u.userId === userId);
      user.ownedBoards.push(tableId);
    },
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
  deleteUserTable,
  addUserTable,
} = usersSlice.actions;

export default usersSlice.reducer;
