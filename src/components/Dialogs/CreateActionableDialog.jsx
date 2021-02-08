import React, { useRef, useState } from "react";
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

import { useDispatch } from "react-redux";
import { addActionable } from "../../service/actionable";

const CreateActionableDialog = ({ open, setOpen, commitmentId }) => {
  const dispatch = useDispatch();
  const formRef = useRef("form");

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const closeDialog = () => {
    setName("");
    setOpen(false);
  };

  const handleSubmit = () => {
    // api call to create actionable
    const payload = {
      commitment_id: commitmentId,
      title: name,
      duration: duration,
      description: description,
      url: url,
    };
    addActionable(payload);

    closeDialog();
  };

  return (
    <BasicDialog open={open}>
      <div style={{ padding: "24px 48px" }}>
        {/* HEADER */}
        <Header3Light style={{ marginBottom: 8, textAlign: "center" }}>
          Create a new actionable
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
            style={{ width: "100%", marginBottom: 20 }}
          />

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
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

export default CreateActionableDialog;
