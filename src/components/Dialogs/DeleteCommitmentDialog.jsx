import React from "react";
import PropTypes from "prop-types";

import {
  BasicDialog,
  MainButton,
  SecondaryButton,
  Header3Light,
  BodyText,
} from "../../styles/GlobalStyles";

import { useDispatch } from "react-redux";
import { deleteCommitment } from "../../service/commitment";

const DeleteCommitmentDialog = ({ open, setOpen, name, id }) => {
  const dispatch = useDispatch();

  const closeDialog = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    // api call to delete commitment
    deleteCommitment(id);
    // deleteCategory(id).then(() => {
    //   dispatch(deleteCategoryAction(id));
    // });

    closeDialog();
  };

  return (
    <BasicDialog open={open}>
      <div style={{ padding: "24px 48px" }}>
        <Header3Light style={{ marginBottom: 8, textAlign: "center" }}>
          Are you sure you want to delete{" "}
          <span style={{ fontWeight: 900 }}>{name}</span>?
        </Header3Light>
        <BodyText style={{ marginBottom: 32, textAlign: "center" }}>
          This action cannot be undone.
        </BodyText>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SecondaryButton onClick={closeDialog} style={{ marginRight: 16 }}>
            CANCEL
          </SecondaryButton>
          <MainButton onClick={handleDelete}>DELETE</MainButton>
        </div>
      </div>
    </BasicDialog>
  );
};

export default DeleteCommitmentDialog;
