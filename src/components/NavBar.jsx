import React from "react";
import styled from "styled-components";
import { Header1, Header3, Colors } from "../styles/GlobalStyles";

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
  background-color: white;
  box-shadow: 0px 1px 4px ${Colors.Stone};
`;

const NavBar = () => {
  return (
    <NavBox>
      <Header1>Time Management</Header1>
      <Header1>Today is Dec 18th</Header1>
      <Header1>Emily Chen</Header1>
    </NavBox>
  );
};

export default NavBar;
