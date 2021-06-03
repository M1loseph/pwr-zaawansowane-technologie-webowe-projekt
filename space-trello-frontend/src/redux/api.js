import { READY } from "./APIStates";
import {
  removeTable,
  addTable,
  addTableAPIContainer,
  fetchingTableFailed,
} from "./tablesSlice";
import {
  deleteUserTable,
  addUserTable,
  updateUser,
  addUserAPIContainer,
  addUser,
  fetchingUserFailed,
} from "./usersSlice";

export const fetchTableAPI = (id) => {
  return async (dispatch, getState) => {
    dispatch(addTableAPIContainer(id));
    const response = await fetch(`/api/board/${id}`);
    if (response.ok) {
      const table = await response.json();
      dispatch(addTable(table));
    } else {
      dispatch(fetchingTableFailed(id));
    }
  };
};

export const deleteTableAPI = (id) => {
  return async (dispatch, getState) => {
    const { tables } = getState();
    const { user } = getState();
    if (tables.find((t) => t.boardId === id)) {
      const response = await fetch(`/api/board/${id}`, { method: "DELETE" });
      if (response.ok) {
        dispatch(deleteUserTable({ userId: user.userId, tableId: id }));
        dispatch(removeTable(id));
      }
    }
  };
};

export const createTableAPI = ({ title, description, background }) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    const response = await fetch(`/api/board/`, {
      method: "POST",
      body: JSON.stringify({
        boardTitle: title,
        description: description,
        img: background,
        owner: user.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const table = await response.json();
      dispatch(addTable(table));
      dispatch(addUserTable({ tableId: table.boardId, userId: user.userId }));
    }
  };
};

export const updateUserAPI = ({
  firstName,
  lastName,
  email,
  password,
  preferredColor,
  avatar,
}) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    if (user.status === READY) {
      const { userId } = user.entity;
      const response = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          preferredColor,
          avatar,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const updatedUser = await response.json();
        dispatch(updateUser(updatedUser));
      }
    }
  };
};

export const fetchUserAPI = (id) => {
  return async (dispatch, getState) => {
    const { users } = getState();
    // make sure that this this id does not exist
    if (!users.find((u) => u.id === id)) {
      dispatch(addUserAPIContainer(id));
      const response = await fetch(`/api/user/${id}`);
      if (response.ok) {
        dispatch(addUser(await response.json()));
      } else {
        dispatch(fetchingUserFailed());
      }
    }
  };
};

export const fetchCurrentUserAPI = () => {
  return async (dispatch, getState) => {
    const { user } = getState();
    if (user.status === READY) {
      const { userId } = user.entity;
      fetchUserAPI(userId)(dispatch, getState);
    }
  };
};
