import React from "react";
import { Header1, Header3 } from "../styles/GlobalStyles";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "24px 48px",
      }}
    >
      <Header1>Time Management</Header1>
      <Header1>Today is Dec 18th</Header1>
      <Header1>Emily Chen</Header1>
    </div>
  );
};

export default NavBar;
