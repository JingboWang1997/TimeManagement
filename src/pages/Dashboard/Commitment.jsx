import React from "react";
import { Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Header3, Header4, BodyText, Colors } from "../../styles/GlobalStyles";
import Actionable from "./Actionable";

const Commitment = ({ title, deadline, actionables }) => {
  return (
    <div style={{ width: 440 }}>
      {/* COMMITMENT TITLE */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Header3>Commitment</Header3>
          <Header4 style={{ marginLeft: 16, fontWeight: 500 }}>
            (Jan 14)
          </Header4>
        </div>
        <MoreVertIcon />
      </div>

      {/* LIST OF ACTIONABLES */}
      <Actionable />

      <BodyText style={{ color: Colors.Stone, textAlign: "center" }}>
        Create a new actionable
      </BodyText>
    </div>
  );
};

export default Commitment;
