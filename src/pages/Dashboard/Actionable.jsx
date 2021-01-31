import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import {
  BodyText,
  Header4,
  Header4Light,
  LinkText,
} from "../../styles/GlobalStyles";

const Actionable = ({ title, duration, deadline, description, url }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div style={{ display: "flex" }}>
      <FormControlLabel
        style={{ margin: 0, alignItems: "flex-start" }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            name="actionable-check"
          />
        }
      />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <Header4>Actionable</Header4>
          <div style={{ display: "flex" }}>
            <Header4Light>30 min</Header4Light>
            <Header4Light style={{ marginLeft: 38 }}>Dec 25</Header4Light>
          </div>
        </div>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BodyText>
        <LinkText href="https://github.com/JingboWang1997/TimeManagement">
          Url
        </LinkText>
      </div>
    </div>
  );
};

export default Actionable;
