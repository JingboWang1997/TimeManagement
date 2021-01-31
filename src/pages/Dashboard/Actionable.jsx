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
    <FlexBox style={{ marginBottom: 16 }}>
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
        <FlexBetween
          style={{
            marginBottom: 4,
          }}
        >
          <Header4>{title}</Header4>
          <FlexBox>
            <Header4Light>{duration}</Header4Light>
            <Header4Light style={{ marginLeft: 38 }}>{deadline}</Header4Light>
          </FlexBox>
        </FlexBetween>
        <BodyText>{description}</BodyText>
        <LinkText href={url}>Link</LinkText>
      </div>
    </FlexBox>
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
