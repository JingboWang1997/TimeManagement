import React, { useState } from "react";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";

const ActionableLabel = ({ title, duration, deadline, description, url }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Actionable</Typography>
        <div style={{ display: "flex" }}>
          <Typography>30 min</Typography>
          <Typography>Dec 25</Typography>
        </div>
      </div>
      <Typography>Description description</Typography>
      <Typography>Url url</Typography>
    </div>
  );
};

const Actionable = ({ title, duration, deadline, description, url }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleCheckChange}
          name="actionable-check"
        />
      }
      label={<ActionableLabel />}
    />
  );
};

export default Actionable;
