import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider, IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { Header1, Colors, BodyText } from "../../styles/GlobalStyles";
import Commitment from "./Commitment";
import DeleteCategoryDialog from "../../components/Dialogs/DeleteCategoryDialog";
import CreateCommitmentDialog from "../../components/Dialogs/CreateCommitmentDialog";
import CreateCategoryDialog from "../../components/Dialogs/CreateCategoryDialog";

const Category = ({ title, commitments }) => {
  const [editCommitment, setEditCommitment] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [createCommitment, setCreateCommitment] = useState(false);

  return (
    <>
      {/* DIALOGS */}
      <CreateCategoryDialog
        open={editCommitment}
        setOpen={setEditCommitment}
        editMode
        title={title}
      />
      <DeleteCategoryDialog
        open={deleteDialog}
        setOpen={setDeleteDialog}
        name={title}
      />
      <CreateCommitmentDialog
        open={createCommitment}
        setOpen={setCreateCommitment}
      />

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
            <CreateIcon
              onClick={() => setEditCommitment(true)}
              style={{ cursor: "pointer" }}
            />
            <CloseRoundedIcon
              onClick={() => setDeleteDialog(true)}
              style={{ marginLeft: 24, cursor: "pointer" }}
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

        <div style={{ padding: "24px 32px" }}>
          <BodyText
            onClick={() => setCreateCommitment(true)}
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            + Create a new commitment
          </BodyText>
        </div>
      </div>
    </>
  );
};
Category.propTypes = {
  title: PropTypes.string,
  commitments: PropTypes.array,
};

export default Category;
