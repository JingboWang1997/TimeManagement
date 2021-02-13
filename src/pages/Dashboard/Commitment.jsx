import React, { useState } from "react";
import PropTypes from "prop-types";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Header3, FlexVCenter, Header4Light } from "../../styles/GlobalStyles";
import {
  CommitmentContainer,
  CommitmentTitleBox,
  DeadlineText,
  CreateActionableText,
} from "./Commitment.styles";

import CommitmentPopover from "../../components/Popover/CommitmentPopover";
import CommitmentPopper from "../../components/Popper/CommitmentPopper";
import Actionable from "./Actionable";
import CreateActionableDialog from "../../components/Dialogs/CreateActionableDialog";

/**
 *
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

  return (
    <>
      {/* DIALOG */}
      <CreateActionableDialog
        open={actionableDialog}
        setOpen={setActionableDialog}
        commitmentId={id}
      />

      {/* COMMITMENT */}
      <CommitmentContainer>
        {/* COMMITMENT TITLE */}
        <CommitmentTitleBox>
          <FlexVCenter>
            <Header3>{title}</Header3>
            <DeadlineText>({deadline})</DeadlineText>
          </FlexVCenter>
          <CommitmentPopover
            title={title}
            commitmentId={id}
            categoryId={categoryId}
            notes={notes}
          />
        </CommitmentTitleBox>

        <Header4Light>{notes}</Header4Light>

        {/* LIST OF ACTIONABLES */}
        {actionables?.map((actionable, idx) => {
          // console.log("actionable", actionable);
          return (
            <Actionable
              key={idx}
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
