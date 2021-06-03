import { createSlice } from "@reduxjs/toolkit";
import { RUNNING, FAILED, READY } from "./APIStates";

const initialState = {
  users: [
    {
      id: 1,
      status: "ready",
      entity: {
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
    },
  ],
};

const getUserIndexById = (state, id) => {
  return state.users.findIndex((u) => u.id === id);
};

const indexOk = (i) => {
  return i !== -1;
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserAPIContainer(state, action) {
      const id = action.payload;
      state.users.push({
        id,
        status: RUNNING,
        entity: null,
      });
    },
    addUser(state, action) {
      const user = action.payload;
      const i = getUserIndexById(state, user.userId);
      if (indexOk(i)) {
        state.users[i].entity = user;
        state.users[i].status = READY;
      }
    },
    fetchingUserFailed(state, action) {
      const id = action.payload;
      const i = getUserIndexById(state, id);
      if (indexOk(i)) {
        state.users[i].status = FAILED;
      }
    },
    updateUser(state, action) {
      const user = action.payload;
      const { userId } = user;
      const i = getUserIndexById(state, userId);
      if (indexOk(i) && state.users[i].status === READY) {
        state.users[i].entity = user;
      }
    },
    deleteUserTable(state, action) {
      const { userId, tableId } = action.payload;
      const i = getUserIndexById(state, userId);
      if (indexOk(i) && state[i].status === READY) {
        const user = state.users[i].entity;
        // these are pure Id's, no need to check
        user.ownedBoards = user.ownedBoards.filter((t) => {
          return t !== tableId;
        });
        user.collaborationBoards = user.collaborationBoards.filter((t) => {
          return t !== tableId;
        });
      }
    },
    addUserTable(state, action) {
      const { userId, tableId } = action.payload;
      const i = getUserIndexById(state, userId);
      if (indexOk(i) && state.users[i].status === READY) {
        const user = state.users[i].entity;
        user.ownedBoards.push(tableId);
      }
    },
  },
});

export const {
  addUser,
  updateUser,
  deleteUserTable,
  addUserTable,
  addUserAPIContainer,
  fetchingUserFailed,
} = usersSlice.actions;

export default usersSlice.reducer;
