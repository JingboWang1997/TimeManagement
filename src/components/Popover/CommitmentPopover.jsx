import React from "react";
import { Popover, Paper } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {
  MyIconButton,
  ActionButton,
  ActionText,
} from "./CommitmentPopover.styles";

function CommitmentPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
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
          <ActionButton>
            <ActionText>Edit</ActionText>
          </ActionButton>
          <ActionButton>
            <ActionText>Delete</ActionText>
          </ActionButton>
          <ActionButton>
            <ActionText>Manage Actionables</ActionText>
          </ActionButton>
        </Paper>
      </Popover>
    </div>
  );
}

export default CommitmentPopover;
