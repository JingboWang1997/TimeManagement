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

const CreateCategoryDialog = ({ open, setOpen, editMode, title }) => {
  const formRef = useRef("form");
  const [name, setName] = useState(title);

  const handleSubmit = () => {
    // api call to create category

    setName("");
    setOpen(false);
  };

  return (
    <BasicDialog open={open}>
      <div style={{ padding: "24px 48px" }}>
        <Header3Light style={{ marginBottom: 8, textAlign: "center" }}>
          {editMode ? `Edit ${title}` : "Create a new category"}
        </Header3Light>

        <BodyText>Description</BodyText>

        {/* TEXTFIELD */}
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

          {/* BUTTONS */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <SecondaryButton
              onClick={() => setOpen(false)}
              style={{ marginRight: 16 }}
            >
              CANCEL
            </SecondaryButton>
            <MainButton type="submit">
              {editMode ? "SAVE" : "CREATE"}
            </MainButton>
          </div>
        </ValidatorForm>
      </div>
    </BasicDialog>
  );
};
CreateCategoryDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  editMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CreateCategoryDialog;
