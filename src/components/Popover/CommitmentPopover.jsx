import React, { useState } from "react";
import PropTypes from "prop-types";
import { Popover, Paper } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {
  MyIconButton,
  ActionButton,
  ActionText,
} from "./CommitmentPopover.styles";

import CreateCommitmentDialog from "../Dialogs/CreateCommitmentDialog";
import DeleteCommitmentDialog from "../Dialogs/DeleteCommitmentDialog";

/**
 *
 * @param {string} categoryId - Category ID
 * @param {string} commitmentId - Commitment ID
 * @param {string} title - Name of commitment
 */
function CommitmentPopover({ title, notes, commitmentId, categoryId }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  return (
    <>
      {/* DIALOGS */}
      <CreateCommitmentDialog
        open={editDialog}
        setOpen={setEditDialog}
        editMode
        title={title}
        commitmentNotes={notes}
        id={commitmentId}
        categoryId={categoryId}
      />
      <DeleteCommitmentDialog
        open={deleteDialog}
        setOpen={setDeleteDialog}
        name={title}
        id={commitmentId}
      />

      {/* POPOVER */}
      <div>
        <MyIconButton aria-describedby={id} onClick={handleClick}>
          <MoreVertIcon />
        </MyIconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Paper elevation={3}>
            <ActionButton onClick={() => setEditDialog(true)}>
              <ActionText>Edit</ActionText>
            </ActionButton>
            <ActionButton onClick={() => setDeleteDialog(true)}>
              <ActionText>Delete</ActionText>
            </ActionButton>
            <ActionButton>
              <ActionText>Manage Actionables</ActionText>
            </ActionButton>
          </Paper>
        </Popover>
      </div>
    </>
  );
}

CommitmentPopover.propTypes = {
  title: PropTypes.string,
  notes: PropTypes.string,
  commitmentId: PropTypes.string,
  categoryId: PropTypes.string,
};

export default CommitmentPopover;
