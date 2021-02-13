import React from "react";
import styled from "styled-components";
import {
  Colors,
  Header1,
  Header3,
  Header4,
  BodyText,
  LinkText,
} from "./GlobalStyles";

const ColorBlock = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.color ? props.color : "#000")};
  display: flex;
  justify-content: center;
`;

const GlobalStylesPage = () => {
  return (
    <div>
      <Header1>Colors:</Header1>
      <div style={{ display: "flex" }}>
        <ColorBlock color={Colors.Denim}>Denim</ColorBlock>
        <ColorBlock color={Colors.Spruce}>Spruce</ColorBlock>
        <ColorBlock color={Colors.Stone}>Stone</ColorBlock>
        <ColorBlock color={Colors.Cotton}>Cotton</ColorBlock>
      </div>

      <Header1>Header 1</Header1>
      <Header3>Header 3</Header3>
      <Header4>Header 4</Header4>
      <BodyText>Body Text</BodyText>
      <LinkText href="https://material-ui.com/components/links/">
        Link Text
      </LinkText>
    </div>
  );
};

export default GlobalStylesPage;
