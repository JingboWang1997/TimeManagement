import React from 'react';

import { Checkbox } from '@material-ui/core';
import { Note, NoMarginP, CenteredRow, Col } from '../styles/StyledComponents';

export default class Actionable extends React.Component {
  render() {
    return (
      <Col style={{width: '100%', alignItems: 'start'}}>
        <CenteredRow style={{justifyContent: 'space-between', width: '100%'}}>
          <CenteredRow>
            <Checkbox
              checked={false}
            />
            <NoMarginP>actionable</NoMarginP>
          </CenteredRow>
          <Note>estimated duration</Note>
          <NoMarginP>before date</NoMarginP>
        </CenteredRow>
        <Note style={{paddingLeft: 40}}>note</Note>
      </Col>
    );
  }
}