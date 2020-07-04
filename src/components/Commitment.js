import React from 'react';

import CommitmentHeader from './CommitmentHeader';
import Actionable from './Actionable';
import { Col } from '../styles/StyledComponents';



export default class Commitment extends React.Component {
  render() {
    return (
      <Col style={{alignItems: 'start'}}>
        <CommitmentHeader/>
        <Actionable/>
      </Col>
    );
  }
}