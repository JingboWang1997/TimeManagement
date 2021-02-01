import React from "react";
import PropTypes from "prop-types";

import {
  BasicDialog,
  MainButton,
  SecondaryButton,
  Header3Light,
  BodyText,
} from "../../styles/GlobalStyles";

const DeleteCategoryDialog = ({ open, setOpen, name }) => {
  const closeDialog = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    // api call to delete category

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
DeleteCategoryDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  name: PropTypes.string,
};

export default DeleteCategoryDialog;
