import React from "react";
import { Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Actionable from "./Actionable";

const Commitment = ({ title, deadline, actionables }) => {
  return (
    <div style={{ width: 440 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Typography>Commitment</Typography>
          <Typography>(Jan 14)</Typography>
        </div>
        <MoreVertIcon />
      </div>

      {/* LIST OF ACTIONABLES */}
      <Actionable />

      <Typography>Create a new actionable</Typography>
    </div>
  );
};

export default Commitment;
