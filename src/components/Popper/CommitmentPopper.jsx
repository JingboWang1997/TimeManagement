import React from "react";
import {
  Typography,
  Button,
  Popper,
  Fade,
  Paper,
  IconButton,
} from "@material-ui/core";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { BodyText } from "../../styles/GlobalStyles";
import {
  MyIconButton,
  ActionText,
  ActionButton,
} from "./CommitmentPopper.styles";

export default function CommitmentPopper() {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <MyIconButton {...bindToggle(popupState)}>
            <MoreVertIcon />
          </MyIconButton>

          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                {/* <Paper>
                  <Typography>The content of the Popper.</Typography>
                </Paper> */}
                <Paper elevation={3} style={{ marginTop: 4 }}>
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
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
