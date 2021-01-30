import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import CategoriesLayout from "./layouts/CategoriesLayout";
import TopBar from "./components/TopBar";

import GlobalStylesPage from "./styles/GlobalStylesPage";
import Commitment from "./pages/Dashboard/Commitment";
import Actionable from "./pages/Dashboard/Actionable";

function App() {
  return (
    <>
      <Switch>
        <Route path="/global" component={GlobalStylesPage} />
        <Route path="/" component={Commitment} />
      </Switch>
    </>
  );
}

export default App;
