import React from "react";
import PropTypes from "prop-types";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Header3, FlexVCenter } from "../../styles/GlobalStyles";
import {
  CommitmentContainer,
  CommitmentTitleBox,
  DeadlineText,
  CreateActionableText,
} from "./Commitment.styles";

import Actionable from "./Actionable";

const Commitment = ({ title, deadline, actionables }) => {
  return (
    <CommitmentContainer>
      {/* COMMITMENT TITLE */}
      <CommitmentTitleBox>
        <FlexVCenter>
          <Header3>{title}</Header3>
          <DeadlineText>({deadline})</DeadlineText>
        </FlexVCenter>
        <MoreVertIcon />
      </CommitmentTitleBox>

      {/* LIST OF ACTIONABLES */}
      {actionables?.map((actionable, idx) => {
        console.log("actionable", actionable);
        return (
          <Actionable
            key={idx}
            title={actionable.name}
            duration={actionable.duration}
            deadline={actionable.deadline}
            description={actionable.description}
            url={actionable.url}
            isChecked={actionable.checked}
          />
        );
      })}

      {/* CREATE ACTIONABLE BUTTON */}
      <CreateActionableText>+ Create a new actionable</CreateActionableText>
    </CommitmentContainer>
  );
};
Commitment.propTypes = {
  title: PropTypes.string,
  deadline: PropTypes.string,
  actionables: PropTypes.array,
};

export default Commitment;
