import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import CategoriesLayout from "./layouts/CategoriesLayout";
import TopBar from "./components/TopBar";

import GlobalStylesPage from "./styles/GlobalStylesPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/global" component={GlobalStylesPage} />
        <Route path="/" component={DashboardPage} />
      </Switch>
    </>
  );
}

export default App;
