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
} from "../../styles/GlobalStyles";

const CreateCategoryDialog = ({ open, setOpen }) => {
  const formRef = useRef("form");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    // api call to create category

    setName("");
    setOpen(false);
  };

  return (
    <BasicDialog open={open}>
      <div style={{ padding: "24px 48px" }}>
        <Header3Light style={{ marginBottom: 8, textAlign: "center" }}>
          Create a new category
        </Header3Light>
        <BodyText>Description</BodyText>

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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <SecondaryButton
              onClick={() => setOpen(false)}
              style={{ marginRight: 16 }}
            >
              CANCEL
            </SecondaryButton>
            <MainButton type="submit">CREATE</MainButton>
          </div>
        </ValidatorForm>
      </div>
    </BasicDialog>
  );
};
CreateCategoryDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default CreateCategoryDialog;
