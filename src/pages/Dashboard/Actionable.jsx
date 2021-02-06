import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BodyText,
  Header4,
  Header4Light,
  LinkText,
  FlexBox,
  FlexBetween,
  StyledFormControlLabel,
  StyledCheckbox,
} from "../../styles/GlobalStyles";
import {
  ActionableContainer,
  DeadlineText,
  ActionableTitleBox,
} from "./Actionable.styles";

const Actionable = ({
  title,
  duration,
  deadline,
  description,
  url,
  isChecked,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <ActionableContainer>
      <StyledFormControlLabel
        control={
          <StyledCheckbox
            checked={checked}
            onChange={handleCheckChange}
            name="actionable-check"
          />
        }
      />

      <div style={{ width: "100%" }}>
        <ActionableTitleBox>
          <Header4>{title}</Header4>
          <FlexBox>
            <Header4Light>{duration}</Header4Light>
            <DeadlineText>{deadline}</DeadlineText>
          </FlexBox>
        </ActionableTitleBox>

        <BodyText>{description}</BodyText>
        <LinkText href={url}>Link</LinkText>
      </div>
    </ActionableContainer>
  );
};

Actionable.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  deadline: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default Actionable;
