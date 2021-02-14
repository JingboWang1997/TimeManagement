import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider } from "@material-ui/core";

import { Header1 } from "../../styles/GlobalStyles";
import {
  CategoryContainer,
  CategoryTitle,
  CommitmentContainer,
  NewCommitmentBox,
  NewCommitmentButton,
  MyCreateIcon,
  MyCloseRoundedIcon,
} from "./Category.styles";

import Commitment from "./Commitment";
import CreateCommitmentDialog from "../../components/Dialogs/CreateCommitmentDialog";
import CreateCategoryDialog from "../../components/Dialogs/CreateCategoryDialog";
import DeleteDialog from "../../components/Dialogs/DeleteDialog";

/**
 * Render a single Category
 * @param {string} title - Name of category
 * @param {string} id - Category ID
 * @param {Array} commitments - List of commitments in category
 */
const Category = ({ title, id, commitments }) => {
  // dialog setters
  const [editCommitment, setEditCommitment] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [createCommitment, setCreateCommitment] = useState(false);

  return (
    <>
      {/* DIALOGS */}
      <CreateCategoryDialog
        open={editCommitment}
        setOpen={setEditCommitment}
        editMode
        title={title}
        id={id}
      />
      <DeleteDialog
        open={deleteDialog}
        setOpen={setDeleteDialog}
        name={title}
        id={id}
        type="category"
      />
      <CreateCommitmentDialog
        open={createCommitment}
        setOpen={setCreateCommitment}
        categoryId={id}
      />

      {/* CONTENT */}
      <CategoryContainer>
        {/* CATEGORY TITLE */}
        <CategoryTitle>
          <Header1>{title}</Header1>
          <div>
            <MyCreateIcon onClick={() => setEditCommitment(true)} />
            <MyCloseRoundedIcon onClick={() => setDeleteDialog(true)} />
          </div>
        </CategoryTitle>

        {/* LIST OF COMMITMENTS */}
        <CommitmentContainer>
          {commitments?.map((commitment, idx) => {
            return (
              <React.Fragment key={idx}>
                <Commitment
                  categoryId={id}
                  id={commitment.id}
                  title={commitment.title}
                  notes={commitment.notes}
                  // deadline={commitment.deadline}
                  actionables={commitment.actionables}
                />
                {idx !== commitments.length - 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </CommitmentContainer>

        <Divider />

        {/* CREATE NEW COMMITMENT */}
        <NewCommitmentBox>
          <NewCommitmentButton onClick={() => setCreateCommitment(true)}>
            + Create a new commitment
          </NewCommitmentButton>
        </NewCommitmentBox>
      </CategoryContainer>
    </>
  );
};
Category.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  commitments: PropTypes.array,
};

export default Category;
