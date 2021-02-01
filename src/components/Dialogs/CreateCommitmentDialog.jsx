import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ValidatorForm } from "react-material-ui-form-validator";

import {
  BasicDialog,
  MainButton,
  SecondaryButton,
  Header3Light,
  BodyText,
  StyledTextValidator,
  StyledTextField,
} from "../../styles/GlobalStyles";

const CreateCommitmentDialog = ({ open, setOpen }) => {
  const formRef = useRef("form");
  const [name, setName] = useState("");

  const closeDialog = () => {
    setName("");
    setOpen(false);
  };

  const handleSubmit = () => {
    // api call to create commitment

    closeDialog();
  };

  return (
    <BasicDialog open={open}>
      <div style={{ padding: "24px 48px" }}>
        {/* HEADER */}
        <Header3Light style={{ marginBottom: 8, textAlign: "center" }}>
          Create a new category
        </Header3Light>
        <BodyText>Description</BodyText>

        {/* FORM */}
        <ValidatorForm onSubmit={handleSubmit} ref={formRef}>
          <StyledTextValidator
            placeholder="Enter name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            validators={["required"]}
            errorMessages={["You must enter a name"]}
            style={{ marginTop: 24, marginBottom: 32, width: "100%" }}
          />

          <StyledTextField
            placeholder="Notes (optional)"
            variant="outlined"
            multiline
            rows={6}
            style={{ width: "100%" }}
          />

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 32,
            }}
          >
            <SecondaryButton onClick={closeDialog} style={{ marginRight: 16 }}>
              CANCEL
            </SecondaryButton>
            <MainButton type="submit">CREATE</MainButton>
          </div>
        </ValidatorForm>
      </div>
    </BasicDialog>
  );
};
CreateCommitmentDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default CreateCommitmentDialog;
