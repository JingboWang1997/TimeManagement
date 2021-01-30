import React from "react";
import "./App.css";

import CategoriesLayout from "./layouts/CategoriesLayout";
import TopBar from "./components/TopBar";

import Commitment from "./pages/Dashboard/Commitment";
import Actionable from "./pages/Dashboard/Actionable";

function App() {
  return (
    // <div className="App">
    //   <TopBar />
    //   <CategoriesLayout />
    // </div>
    <Commitment />
    // <Actionable />
  );
}

export default App;
