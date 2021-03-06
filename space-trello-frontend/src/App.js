import React, { useState } from "react";
import TablePage from "./pages/TablePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import TablesMenuPage from "./pages/TablesMenuPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
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
          <TablesMenuPage />
        </Route>
        <Route exact path="/table">
          <TablePage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
