import React from "react";
import TablePage from "./pages/TablePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import UserTablesPage from "./pages/UserSettingsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/table">
          <TablePage />
        </Route>
        <Route exact path="/tables">
          <UserTablesPage />
        </Route>
        <Route exact path="/table">
          <TablePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
