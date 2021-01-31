import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { Header1, Colors } from "../../styles/GlobalStyles";
import Commitment from "./Commitment";

const Category = ({ title, commitments }) => {
  return (
    <div style={{ width: 440, backgroundColor: "white", borderRadius: 20 }}>
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
        <Header1>Category</Header1>
        <div>
          <CreateIcon />
          <CloseRoundedIcon style={{ marginLeft: 24 }} />
        </div>
      </div>

      <Commitment />
    </div>
  );
};

export default Category;
