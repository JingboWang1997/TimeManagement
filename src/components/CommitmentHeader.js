import React from 'react';

import { NoMarginP, Note } from '../styles/StyledComponents'

export default class CommitmentHeader extends React.Component {
    render() {
      return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <NoMarginP style={{fontWeight: 'bolder'}}>Commitment</NoMarginP>
            <Note>note about this commitment</Note>
        </div>
      );
    }
}