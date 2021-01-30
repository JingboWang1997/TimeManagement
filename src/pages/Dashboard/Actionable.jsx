import React, { useState } from "react";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import {
  BodyText,
  Header4,
  Header4Light,
  LinkText,
} from "../../styles/GlobalStyles";

// const ActionableLabel = ({ title, duration, deadline, description, url }) => {
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <Header4>Actionable</Header4>
//         <div style={{ display: "flex" }}>
//           <Header4Light>30 min</Header4Light>
//           <Header4Light>Dec 25</Header4Light>
//         </div>
//       </div>
//       <BodyText>Description description</BodyText>
//       <LinkText>Url url</LinkText>
//     </>
//   );
// };

const Actionable = ({ title, duration, deadline, description, url }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div style={{ display: "flex" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            name="actionable-check"
          />
        }
        // label={<ActionableLabel />}
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
        <LinkText>Url url</LinkText>
      </div>
    </div>
  );
};

export default Actionable;
