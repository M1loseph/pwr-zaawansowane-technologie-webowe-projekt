import { READY } from "./APIStates";
import {
  addColumn,
  addColumnAPIContainer,
  fetchingColumnFailed,
} from "./columnsSlice";
import {
  deleteTable,
  addTable,
  addTableAPIContainer,
  fetchingTableFailed,
} from "./tablesSlice";
import {
  addUserTable,
  updateUser,
  addUserAPIContainer,
  addUser,
  fetchingUserFailed,
} from "./usersSlice";

import {
  addCard,
  createCardAPIContainer,
  fetchingCardFailed,
} from "./cardsSlice";

import { addCategory, createCategoriesAPIContainer } from "./categoriesSlice";

export const fetchCategoryAPI = (id) => {
  return async (dispatch, getState) => {
    const { categories } = getState();
    if (!categories.categories.find((c) => c.id === id)) {
      dispatch(createCategoriesAPIContainer(id));
      const response = await fetch(`/api/label/${id}`);
      if (response.ok) {
        const category = await response.json();
        dispatch(addCategory(category));
      } else {
        dispatch(fetchingCardFailed(id));
      }
    }
  };
};

export const fetchCardAPI = (id) => {
  return async (dispatch, getState) => {
    const { cards } = getState();
    if (!cards.cards.find((c) => c.id === id)) {
      dispatch(createCardAPIContainer(id));
      const response = await fetch(`/api/card/${id}`);
      if (response.ok) {
        const card = await response.json();
        dispatch(addCard(card));
      } else {
        dispatch(fetchingCardFailed(id));
      }
    }
  };
};

export const fetchColumnAPI = (id) => {
  return async (dispatch, getState) => {
    const { columns } = getState();
    if (!columns.columns.find((c) => c.id === id)) {
      dispatch(addColumnAPIContainer(id));
      const response = await fetch(`/api/column/${id}`);
      if (response.ok) {
        const column = await response.json();
        dispatch(addColumn(column));
      } else {
        dispatch(fetchingColumnFailed(id));
      }
    }
  };
};

export const fetchTableAPI = (id) => {
  return async (dispatch, getState) => {
    const { tables } = getState();
    if (!tables.tables.find((t) => t.id === id)) {
      dispatch(addTableAPIContainer(id));
      const response = await fetch(`/api/board/${id}`);
      if (response.ok) {
        const table = await response.json();
        dispatch(addTable(table));
      } else {
        dispatch(fetchingTableFailed(id));
      }
    }
  };
};

export const deleteTableAPI = (id) => {
  return async (dispatch, getState) => {
    const { tables } = getState().tables;
    const { users } = getState().users;
    if (tables.find((t) => t.id === id)) {
      const response = await fetch(`/api/board/${id}`, { method: "DELETE" });
      if (response.ok) {
        users.forEach((u) => {
          if (u.status === READY) {
            refetchUserAPI(u.id)(dispatch, getState);
          }
        });
        dispatch(deleteTable(id));
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
        owner: user.entity.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const table = await response.json();
      dispatch(addTableAPIContainer(table.boardId));
      dispatch(addTable(table));
      dispatch(
        addUserTable({ tableId: table.boardId, userId: user.entity.userId })
      );
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
    if (!users.users.find((u) => u.id === id)) {
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

export const fetchAllUsersAPI = () => {
  return async (dispatch, getState) => {
    const { users } = getState();
    const response = await fetch("/api/user/");
    if (response.ok) {
      const newUsers = await response.json();
      for (const user in newUsers) {
        if (!users.users.find((u) => u.id === user.userId)) {
          dispatch(addUserAPIContainer(user.userId));
          dispatch(addUser(user));
        }
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

export const refetchUserAPI = (id) => {
  return async (dispatch, getState) => {
    const { users } = getState().users;
    // make sure that this this id does not exist
    const user = users.find((u) => u.id === id);
    if (user) {
      const response = await fetch(`/api/user/${id}`);
      if (response.ok) {
        dispatch(updateUser(await response.json()));
      }
    }
  };
};
