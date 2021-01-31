import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import {
  BodyText,
  Header4,
  Header4Light,
  LinkText,
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
    <div style={{ display: "flex" }}>
      <FormControlLabel
        style={{ margin: 0, alignItems: "flex-start" }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            name="actionable-check"
          />
        }
      />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <Header4>{title}</Header4>
          <div style={{ display: "flex" }}>
            <Header4Light>{duration}</Header4Light>
            <Header4Light style={{ marginLeft: 38 }}>{deadline}</Header4Light>
          </div>
        </div>
        <BodyText>{description}</BodyText>
        <LinkText href={url}>Url</LinkText>
      </div>
    </div>
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
