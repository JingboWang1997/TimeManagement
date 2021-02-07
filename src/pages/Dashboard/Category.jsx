import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Divider, IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { Header1, Colors, BodyText } from "../../styles/GlobalStyles";
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
import DeleteCategoryDialog from "../../components/Dialogs/DeleteCategoryDialog";
import CreateCommitmentDialog from "../../components/Dialogs/CreateCommitmentDialog";
import CreateCategoryDialog from "../../components/Dialogs/CreateCategoryDialog";

import { getCommitments } from "../../service/commitment";

const Category = ({ title, id, commitments }) => {
  const [editCommitment, setEditCommitment] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [createCommitment, setCreateCommitment] = useState(false);

  useEffect(() => {
    console.log("category id", id);
    getCommitments(id).then((res) => {
      console.log(res);
    });
  });

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
      <DeleteCategoryDialog
        open={deleteDialog}
        setOpen={setDeleteDialog}
        name={title}
        id={id}
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
            // console.log("commitment", commitment);
            return (
              <>
                <Commitment
                  key={idx}
                  categoryId={id}
                  title={commitment.name}
                  deadline={commitment.deadline}
                  actionables={commitment.actionables}
                />
                {idx !== commitments.length - 1 && <Divider />}
              </>
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
  commitments: PropTypes.array,
};

export default Category;
