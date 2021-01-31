import React from "react";
import PropTypes from "prop-types";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Header3, Header4, BodyText, Colors } from "../../styles/GlobalStyles";
import Actionable from "./Actionable";

const Commitment = ({ title, deadline, actionables }) => {
  return (
    <div style={{ padding: "24px 32px" }}>
      {/* COMMITMENT TITLE */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Header3>{title}</Header3>
          <Header4 style={{ marginLeft: 16, fontWeight: 500 }}>
            ({deadline})
          </Header4>
        </div>
        <MoreVertIcon />
      </div>

      {/* LIST OF ACTIONABLES */}
      {actionables.map((actionable, idx) => {
        console.log("actionable", actionable);
        return (
          <Actionable
            key={idx}
            title={actionable.name}
            duration={actionable.duration}
            deadline={actionable.deadline}
            description={actionable.description}
            url={actionable.url}
            isChecked={actionable.checked}
          />
        );
      })}

      <BodyText style={{ color: Colors.Stone, textAlign: "center" }}>
        + Create a new actionable
      </BodyText>
    </div>
  );
};
Commitment.propTypes = {
  title: PropTypes.string,
  deadline: PropTypes.string,
  actionables: PropTypes.array,
};

export default Commitment;
