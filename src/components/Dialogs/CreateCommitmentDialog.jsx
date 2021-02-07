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
  SecondaryButton,
  Header3Light,
  BodyText,
  StyledTextValidator,
  StyledTextField,
} from "../../styles/GlobalStyles";

/**
 *
 * @param {boolean} open Whether dialog is open
 * @param {func} setOpen
 * @param {boolean} editMode Whether in edit or create mode
 * @param {string} [title] Name of the commitment
 */
const CreateCommitmentDialog = ({ open, setOpen, editMode, title }) => {
  const formRef = useRef("form");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const closeDialog = () => {
    setName("");
    setOpen(false);
  };

  const handleSubmit = () => {
    // api call to create commitment

    closeDialog();
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <BasicDialog open={open}>
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
            <MainButton type="submit">CREATE</MainButton>
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
};

export default CreateCommitmentDialog;
