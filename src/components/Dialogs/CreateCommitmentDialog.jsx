import React, { useRef, useState, useEffect } from "react";
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
  SecondaryButton,
  Header3Light,
  BodyText,
  StyledTextValidator,
  StyledTextField,
} from "../../styles/GlobalStyles";

import { useDispatch } from "react-redux";
import { addCommitment, editCommitment } from "../../service/commitment";
import {
  addCommitmentAction,
  editCommitmentAction,
} from "../../redux/actions/commitmentActions";

/**
 * Dialog to edit and create a commitment
 * @param {boolean} open Whether dialog is open
 * @param {func} setOpen
 * @param {boolean} editMode Whether in edit or create mode
 * @param {string} [title] Name of the commitment, only needed for editMode
 * @param {string} categoryId - ID of category commitment is associated with
 * @param {string} id - Commitment ID
 */
const CreateCommitmentDialog = ({
  open,
  setOpen,
  editMode,
  title,
  commitmentNotes,
  deadline,
  categoryId,
  id,
  actionables,
}) => {
  const dispatch = useDispatch();
  const formRef = useRef("form");

  const [name, setName] = useState("");
  // const [selectedDate, setSelectedDate] = useState(
  //   new Date("2014-08-18T21:11:54")
  // );
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [notes, setNotes] = useState(commitmentNotes);

  const enterDialog = () => {
    setName(title || "");
    setNotes(commitmentNotes || "");
    setSelectedDate(deadline || Date.now());
  };

  const closeDialog = () => {
    setName("");
    setNotes("");
    setSelectedDate(null);

    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (editMode) {
      const payload = {
        id: id,
        category_id: categoryId,
        title: name,
        deadline: selectedDate?.valueOf(),
        notes: notes,
        actionables: actionables,
      };
      editCommitment(payload);

      // redux call
      dispatch(editCommitmentAction(categoryId, payload));
    } else {
      const payload = {
        category_id: categoryId,
        title: name,
        deadline: selectedDate?.valueOf(),
        notes: notes,
        actionables: [],
      };
      console.log("payload", payload);
      addCommitment(payload);

      // redux call
      //
    }

    closeDialog();
  };

  // useEffect(() => {
  //   console.log(typeof selectedDate);
  //   console.log(selectedDate?.valueOf());
  // }, [selectedDate]);

  return (
    <BasicDialog open={open} onEnter={enterDialog}>
      <div style={{ padding: "24px 48px" }}>
        {/* HEADER */}
        <Header3Light style={{ marginBottom: 8, textAlign: "center" }}>
          {editMode ? `Edit ${title}` : "Create a new commitment"}
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
            style={{ marginTop: 24, marginBottom: 24, width: "100%" }}
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
            placeholder="Notes (optional)"
            variant="outlined"
            multiline
            rows={6}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
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
            <MainButton type="submit">
              {editMode ? "EDIT" : "CREATE"}
            </MainButton>
          </div>
        </ValidatorForm>
      </div>
    </BasicDialog>
  );
};
CreateCommitmentDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  title: PropTypes.string,
  commitmentNotes: PropTypes.string,
  categoryId: PropTypes.string,
  id: PropTypes.string,
  actionables: PropTypes.array,
};

export default CreateCommitmentDialog;
