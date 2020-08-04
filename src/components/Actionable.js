import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '@material-ui/core';
import { Note, NoMarginP, CenteredRow, Col } from '../styles/StyledComponents';

// Actionable represents the smallest unit with a check box and related info of an actionable item
export default class Actionable extends React.Component {
  render() {
    const { name, estimatedDuration, beforeDate, note } = this.props.actionable;
    return (
      <Col style={{width: '100%', alignItems: 'start'}}>
        <CenteredRow style={{justifyContent: 'space-between', width: '100%'}}>
          <CenteredRow>
            <Checkbox
              checked={false}
            />
            <NoMarginP>{name}</NoMarginP>
          </CenteredRow>
          <Note>{estimatedDuration}</Note>
          <NoMarginP>by {beforeDate}</NoMarginP>
        </CenteredRow>
        <Note style={{paddingLeft: 40, textAlign: 'left'}}>{note}</Note>
      </Col>
    );
  }
}

Actionable.propTypes = {
  actionable: PropTypes.shape({
    name: PropTypes.string,
    estimatedDuration: PropTypes.string,
    beforeDate: PropTypes.string,
    note: PropTypes.string
  })
};
