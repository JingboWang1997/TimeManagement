import React from 'react';
import PropTypes from 'prop-types';

import CommitmentHeader from './CommitmentHeader';
import Actionable from './Actionable';
import { Col } from '../styles/StyledComponents';



export default class Commitment extends React.Component {

  buildActionableComponents(actionables) {
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
        {this.buildActionableComponents(actionables)}
      </Col>
    );
  }
}

Commitment.propTypes = {
  style: PropTypes.object,
  commitment: PropTypes.object
};