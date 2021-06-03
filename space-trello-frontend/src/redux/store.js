import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import cardsReducer from "./cardsSlice";
import categoriesReducer from "./categoriesSlice";
import columnsReducer from "./columnsSlice";
import tablesReducer from "./tablesSlice";

/*
    userReducer - id of user in users that is currently logged in
    tables - all tables that user have access to
    columns - columns of table selected by user
    cards - cards belongin to table selected by user
    categories - all categories that have anything to do with table selected by user
    users - all users that collaborate on a table
*/
export default configureStore({
  reducer: {
    user: userReducer,
    tables: tablesReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    categories: categoriesReducer,
    users: usersReducer,
  },
});
