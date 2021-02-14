import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ValidatorForm } from "react-material-ui-form-validator";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import {
  BasicDialog,
  MainButton,
  RedMainButton,
  BodyText,
  StyledTextField,
} from "../../styles/GlobalStyles";
import {
  DialogContent,
  DialogTitle,
  ButtonContainer,
  CancelButton,
  MyTextField,
  MyTextValidator,
  StyledKeyboardDatePicker,
} from "./DialogStyles.styles";

import DeleteDialog from "../Dialogs/DeleteDialog";

import { useDispatch } from "react-redux";
import { addActionable, editActionable } from "../../service/actionable";
import { editActionableAction } from "../../redux/actions/actionableActions";

/**
 * Dialog to edit and create an actionable
 */
const CreateActionableDialog = ({
  open,
  setOpen,
  categoryId,
  commitmentId,
  id,
  title,
  durationInit,
  deadlineInit,
  descriptionInit,
  urlInit,
  editMode,
}) => {
  const dispatch = useDispatch();
  const formRef = useRef("form");

  // form states
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [deleteDialog, setDeleteDialog] = useState(false);

  const enterDialog = () => {
    setName(title || "");
    setSelectedDate(deadlineInit || Date.now());
    setDuration(durationInit || "");
    setDescription(descriptionInit || "");
    setUrl(urlInit || "");
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (editMode) {
      // api call to edit actionable
      const payload = {
        category_id: categoryId,
        commitment_id: commitmentId,
        id: id,
        title: name,
        deadline: selectedDate?.valueOf(),
        duration: duration,
        description: description,
        url: url,
      };
      editActionable(payload).then(() => {
        dispatch(editActionableAction(categoryId, commitmentId, payload));
      });
    } else {
      // api call to create actionable
      const payload = {
        category_id: categoryId,
        commitment_id: commitmentId,
        title: name,
        deadline: selectedDate?.valueOf(),
        duration: duration,
        description: description,
        url: url,
      };
      addActionable(payload);
    }

    closeDialog();
  };

  return (
    <>
      {/* DIALOG */}
      <DeleteDialog
        open={deleteDialog}
        setOpen={setDeleteDialog}
        name={title}
        id={id}
        categoryId={categoryId}
        commitmentId={commitmentId}
        type="actionable"
      />

      {/* MAIN CONTENT */}
      <BasicDialog open={open} onEnter={enterDialog}>
        <DialogContent>
          {/* HEADER */}
          <DialogTitle>
            {editMode ? `Edit ${title}` : "Create a new actionable"}
          </DialogTitle>
          <BodyText style={{ marginBottom: 24 }}>Description</BodyText>

          {/* FORM */}
          <ValidatorForm onSubmit={handleSubmit} ref={formRef}>
            <MyTextValidator
              placeholder="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              validators={["required"]}
              errorMessages={["You must enter a name"]}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <StyledKeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>

            <MyTextField
              placeholder="Duration (optional)"
              variant="outlined"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <MyTextField
              placeholder="Description (optional)"
              variant="outlined"
              multiline
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <MyTextField
              placeholder="URL (optional)"
              variant="outlined"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            {/* BUTTONS */}
            <ButtonContainer $editMode={editMode}>
              {editMode && (
                <RedMainButton onClick={() => setDeleteDialog(true)}>
                  DELETE
                </RedMainButton>
              )}
              <div>
                <CancelButton onClick={closeDialog}>CANCEL</CancelButton>
                <MainButton type="submit">
                  {editMode ? "SAVE" : "CREATE"}
                </MainButton>
              </div>
            </ButtonContainer>
          </ValidatorForm>
        </DialogContent>
      </BasicDialog>
    </>
  );
};

CreateActionableDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  categoryId: PropTypes.string,
  commitmentId: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  durationInit: PropTypes.string,
  // deadlineInit,
  descriptionInit: PropTypes.string,
  urlInit: PropTypes.string,
  editMode: PropTypes.bool,
};

export default CreateActionableDialog;
