import React from "react";
import PropTypes from "prop-types";
import CreateIcon from "@material-ui/icons/Create";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { Header1, Colors } from "../../styles/GlobalStyles";
import Commitment from "./Commitment";

const Category = ({ title, commitments }) => {
  return (
    <div
      style={{
        width: 440,
        backgroundColor: "white",
        borderRadius: 20,
        boxShadow: `1px 1px 4px ${Colors.Stone}`,
      }}
    >
      {/* CATEGORY TITLE */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 32px",
          boxShadow: `0 2px ${Colors.Cotton}`,
        }}
      >
        <Header1>{title}</Header1>
        <div>
          <CreateIcon />
          <CloseRoundedIcon style={{ marginLeft: 24 }} />
        </div>
      </div>

      {/* LIST OF COMMITMENTS */}
      {commitments.map((commitment, idx) => {
        console.log("commitment", commitment);
        return (
          <Commitment
            key={idx}
            title={commitment.name}
            deadline={commitment.deadline}
            actionables={commitment.actionables}
          />
        );
      })}
    </div>
  );
};
Category.propTypes = {
  title: PropTypes.string,
  commitments: PropTypes.array,
};

export default Category;
