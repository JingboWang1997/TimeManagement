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

import { useDispatch } from "react-redux";
import {
  editCategoryAction,
  getCategoriesAction,
} from "../../redux/actions/categoryActions";
import {
  addCategory,
  editCategory,
  getCategories,
} from "../../service/category";

const CreateCategoryDialog = ({ open, setOpen, editMode, title, id }) => {
  const dispatch = useDispatch();
  const formRef = useRef("form");
  const [name, setName] = useState(title);

  const handleSubmit = () => {
    if (editMode) {
      // api call to edit category
      const payload = {
        title: name,
        user_id: "user_id",
        id: id,
      };
      editCategory(payload).then(() => {
        dispatch(editCategoryAction(payload));
      });
    } else {
      // api call to create category
      const payload = {
        title: name,
        user_id: "user_id", // hardcode for now
      };
      addCategory(payload).then(() => {
        getCategories("user_id").then((data) => {
          dispatch(getCategoriesAction(data));
        });
      });
    }

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
