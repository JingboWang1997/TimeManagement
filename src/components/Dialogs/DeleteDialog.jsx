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
import { deleteCategoryAction } from "../../redux/actions/categoryActions";
import { deleteCommitmentAction } from "../../redux/actions/commitmentActions";
import { deleteActionableAction } from "../../redux/actions/actionableActions";
import { deleteCategory } from "../../service/category";
import { deleteCommitment } from "../../service/commitment";
import { deleteActionable } from "../../service/actionable";

/**
 *
 * @param {boolean} open - Whether dialog is open
 * @param {function} setOpen - Set whether dialog is open
 * @param {string} name - Name of category/commitment/actionable
 * @param {string} id - ID of category/commitment/actionable
 * @param {string} type - "category", "commitment", "actionable"
 */
const DeleteDialog = ({
  open,
  setOpen,
  name,
  id,
  type,
  categoryId,
  commitmentId,
}) => {
  const dispatch = useDispatch();

  const closeDialog = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (type === "category") {
      deleteCategory(id).then(() => {
        dispatch(deleteCategoryAction(id));
      });
    } else if (type === "commitment") {
      deleteCommitment(id).then(() => {
        dispatch(deleteCommitmentAction(categoryId, id));
      });
    } else if (type === "actionable") {
      deleteActionable(id).then(() => {
        dispatch(deleteActionableAction(categoryId, commitmentId, id));
      });
    }

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

DeleteDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default DeleteDialog;
