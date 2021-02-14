import React, { useState, useEffect } from "react";
import moment from "moment";
import PropTypes from "prop-types";

import { Header3, FlexVCenter, Header4Light } from "../../styles/GlobalStyles";
import {
  CommitmentContainer,
  CommitmentTitleBox,
  DeadlineText,
  CreateActionableText,
} from "./Commitment.styles";

import CommitmentPopover from "../../components/Popover/CommitmentPopover";
import Actionable from "./Actionable";
import CreateActionableDialog from "../../components/Dialogs/CreateActionableDialog";

/**
 * Render a single commitment
 * @param {string} categoryId - Category ID
 * @param {string} id - Commitment ID
 * @param {string} title - Name of commitment
 * @param {Object} deadline - Date deadline of commitment
 * @param {string} notes - Description of commitment
 * @param {Array} actionables - List of actionables associated with commitment
 */
const Commitment = ({
  categoryId,
  id,
  title,
  deadline,
  notes,
  actionables,
}) => {
  const [actionableDialog, setActionableDialog] = useState(false);

  // useEffect(() => {
  //   console.log("deadline", deadline);
  //   // let test = deadline.seconds * 1000;
  //   let test = moment(new Date(deadline)).format("L");
  //   console.log("test", test);
  // }, [deadline]);

  return (
    <>
      {/* DIALOG */}
      <CreateActionableDialog
        open={actionableDialog}
        setOpen={setActionableDialog}
        commitmentId={id}
        categoryId={categoryId}
      />

      {/* COMMITMENT */}
      <CommitmentContainer>
        {/* COMMITMENT TITLE */}
        <CommitmentTitleBox>
          <FlexVCenter>
            <Header3>{title}</Header3>
            <DeadlineText>
              ({moment(new Date(deadline)).format("LL")})
            </DeadlineText>
          </FlexVCenter>
          <CommitmentPopover
            title={title}
            deadline={deadline}
            commitmentId={id}
            categoryId={categoryId}
            notes={notes}
            actionables={actionables}
          />
        </CommitmentTitleBox>

        <Header4Light>{notes}</Header4Light>

        {/* LIST OF ACTIONABLES */}
        {actionables?.map((actionable, idx) => {
          // console.log("actionable", actionable);
          return (
            <Actionable
              key={idx}
              categoryId={actionable.category_id}
              commitmentId={actionable.commitment_id}
              id={actionable.id}
              title={actionable.title}
              duration={actionable.duration}
              deadline={actionable.deadline}
              description={actionable.description}
              url={actionable.url}
              isChecked={actionable.checked}
            />
          );
        })}

        {/* CREATE ACTIONABLE BUTTON */}
        <CreateActionableText onClick={() => setActionableDialog(true)}>
          + Create a new actionable
        </CreateActionableText>
      </CommitmentContainer>
    </>
  );
};

Commitment.propTypes = {
  title: PropTypes.string,
  deadline: PropTypes.string,
  actionables: PropTypes.array,
};

export default Commitment;
