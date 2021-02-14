import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ValidatorForm } from "react-material-ui-form-validator";

import { BasicDialog, MainButton, BodyText } from "../../styles/GlobalStyles";
import {
  DialogContent,
  DialogTitle,
  ButtonContainer,
  CancelButton,
  MyTextValidator,
} from "./DialogStyles.styles";

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

/**
 * Dialog to edit and create a category
 */
const CreateCategoryDialog = ({ open, setOpen, editMode, title, id }) => {
  const dispatch = useDispatch();
  const formRef = useRef("form");

  const [name, setName] = useState(title || "");

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
      addCategory(payload).then((res) => {
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
      <DialogContent>
        <DialogTitle>
          {editMode ? `Edit ${title}` : "Create a new category"}
        </DialogTitle>
        <BodyText style={{ marginBottom: 24 }}>Description</BodyText>

        {/* TEXTFIELD */}
        <ValidatorForm onSubmit={handleSubmit} ref={formRef}>
          <MyTextValidator
            placeholder="Enter name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            validators={["required"]}
            errorMessages={["You must enter a name"]}
          />

          {/* BUTTONS */}
          <ButtonContainer>
            <CancelButton onClick={() => setOpen(false)}>CANCEL</CancelButton>
            <MainButton type="submit">
              {editMode ? "SAVE" : "CREATE"}
            </MainButton>
          </ButtonContainer>
        </ValidatorForm>
      </DialogContent>
    </BasicDialog>
  );
};
CreateCategoryDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  editMode: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default CreateCategoryDialog;
