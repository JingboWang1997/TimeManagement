import React from 'react';
import PropTypes from 'prop-types';

import CommitmentHeader from './CommitmentHeader';
import Actionable from './Actionable';
import { Col } from '../styles/StyledComponents';



export default class Commitment extends React.Component {
  render() {
    const { style, commitment } = this.props;
    return (
      <Col style={style}>
        <CommitmentHeader commitment={commitment}/>
        <Actionable/>
      </Col>
    );
  }
}

Commitment.propTypes = {
  style: PropTypes.object,
  commitment: PropTypes.object
};