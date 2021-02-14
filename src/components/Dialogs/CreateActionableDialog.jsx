import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ValidatorForm } from "react-material-ui-form-validator";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  BasicDialog,
  MainButton,
  RedMainButton,
  SecondaryButton,
  Header3Light,
  BodyText,
  StyledTextValidator,
  StyledTextField,
} from "../../styles/GlobalStyles";

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
    setDuration(durationInit || "");
    setDescription(descriptionInit || "");
    setUrl(urlInit || "");
  };

  const closeDialog = () => {
    setName("");
    setDuration("");
    setDescription("");
    setUrl("");

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
        deadline: selectedDate,
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
        deadline: selectedDate,
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
        <div style={{ padding: "24px 48px" }}>
          {/* HEADER */}
          <Header3Light style={{ marginBottom: 8, textAlign: "center" }}>
            {editMode ? `Edit ${title}` : "Create a new actionable"}
          </Header3Light>
          <BodyText>Description</BodyText>

          {/* FORM */}
          <ValidatorForm onSubmit={handleSubmit} ref={formRef}>
            <StyledTextValidator
              placeholder="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              validators={["required"]}
              errorMessages={["You must enter a name"]}
              style={{ marginTop: 24, marginBottom: 20, width: "100%" }}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
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
                style={{ width: "100%", marginBottom: 24, marginTop: 0 }}
              />
            </MuiPickersUtilsProvider>

            <StyledTextField
              placeholder="Duration (optional)"
              variant="outlined"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={{ width: "100%", marginBottom: 20 }}
            />

            <StyledTextField
              placeholder="Description (optional)"
              variant="outlined"
              multiline
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: "100%", marginBottom: 20 }}
            />

            <StyledTextField
              placeholder="URL (optional)"
              variant="outlined"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ width: "100%", marginBottom: 32 }}
            />

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {editMode && (
                <RedMainButton onClick={() => setDeleteDialog(true)}>
                  DELETE
                </RedMainButton>
              )}
              <div>
                <SecondaryButton
                  onClick={closeDialog}
                  style={{ marginRight: 16 }}
                >
                  CANCEL
                </SecondaryButton>
                <MainButton type="submit">
                  {editMode ? "SAVE" : "CREATE"}
                </MainButton>
              </div>
            </div>
          </ValidatorForm>
        </div>
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
