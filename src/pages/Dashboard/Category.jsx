import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { Header1, Colors, BodyText } from "../../styles/GlobalStyles";
import Commitment from "./Commitment";
import DeleteCategoryDialog from "../../components/Dialogs/DeleteCategoryDialog";

const Category = ({ title, commitments }) => {
  const [deleteDialog, setDeleteDialog] = useState(false);

  return (
    <>
      {/* DIALOGS */}
      <DeleteCategoryDialog open={deleteDialog} setOpen={setDeleteDialog} />

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
            <CloseRoundedIcon
              onClick={() => setDeleteDialog(true)}
              style={{ marginLeft: 24 }}
            />
          </div>
        </div>

        {/* LIST OF COMMITMENTS */}
        <div style={{ height: 500, overflow: "scroll" }}>
          {commitments.map((commitment, idx) => {
            console.log("commitment", commitment);
            return (
              <>
                <Commitment
                  key={idx}
                  title={commitment.name}
                  deadline={commitment.deadline}
                  actionables={commitment.actionables}
                />
                {idx !== commitments.length - 1 && <Divider />}
              </>
            );
          })}
        </div>

        <Divider />

        <BodyText style={{ textAlign: "center", padding: "24px 32px" }}>
          + Create a new commitment
        </BodyText>
      </div>
    </>
  );
};
Category.propTypes = {
  title: PropTypes.string,
  commitments: PropTypes.array,
};

export default Category;
