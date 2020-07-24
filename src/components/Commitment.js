import React from 'react';
import PropTypes from 'prop-types';

import CommitmentHeader from './CommitmentHeader';
import Actionable from './Actionable';
import { Col } from '../styles/StyledComponents';

// Commitment represents each commitment item in the category content, which is the parent of a list of acitionables
export default class Commitment extends React.Component {
  // constructActionableComponents constructs a list of Actionable components from a list of actionable objects
  constructActionableComponents(actionables) {
    return actionables ? 
      actionables.map(a => <Actionable key={a.Actionable} actionable={a} />) :
      [];
  }

  render() {
    const { style, commitment } = this.props;
    const { actionables } = commitment;
    return (
      <Col style={style}>
        <CommitmentHeader commitment={commitment}/>
        {this.constructActionableComponents(actionables)}
      </Col>
    );
  }
}

Commitment.propTypes = {
  style: PropTypes.object,
  commitment: PropTypes.object
};