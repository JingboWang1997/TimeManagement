import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BodyText,
  Header4,
  Header4Light,
  LinkText,
  FlexBox,
  FlexBetween,
  StyledFormControlLabel,
  StyledCheckbox,
} from "../../styles/GlobalStyles";
import {
  ActionableContainer,
  DeadlineText,
  ActionableTitleBox,
} from "./Actionable.styles";

import CreateActionableDialog from "../../components/Dialogs/CreateActionableDialog";

const Actionable = ({
  categoryId,
  commitmentId,
  id,
  title,
  duration,
  deadline,
  description,
  url,
  isChecked,
}) => {
  const [checked, setChecked] = useState(isChecked || false);
  const [editDialog, setEditDialog] = useState(false);

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      {/* DIALOG */}
      <CreateActionableDialog
        open={editDialog}
        setOpen={setEditDialog}
        categoryId={categoryId}
        commitmentId={commitmentId}
        id={id}
        title={title}
        durationInit={duration}
        deadlineInit={deadline}
        descriptionInit={description}
        urlInit={url}
        editMode
      />

      {/* ACTIONABLE */}
      <ActionableContainer>
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={checked}
              onChange={handleCheckChange}
              name="actionable-check"
            />
          }
        />

        <div style={{ width: "100%" }}>
          <ActionableTitleBox>
            <Header4
              onClick={() => setEditDialog(true)}
              style={{ cursor: "pointer" }}
            >
              {title}
            </Header4>
            <FlexBox>
              <Header4Light>{duration}</Header4Light>
              <DeadlineText>{deadline}</DeadlineText>
            </FlexBox>
          </ActionableTitleBox>

          <BodyText>{description}</BodyText>
          <LinkText href={url}>Link</LinkText>
        </div>
      </ActionableContainer>
    </>
  );
};

Actionable.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  deadline: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default Actionable;
