import React from 'react';
import PropTypes from 'prop-types';

import { NoMarginP, Note } from '../styles/StyledComponents';

export default class CommitmentHeader extends React.Component {
  render() {
    const { commitment, note } = this.props.commitment;
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', backgroundColor: 'green'}}>
        <NoMarginP style={{fontWeight: 'bolder'}}>{commitment}</NoMarginP>
        <Note style={{backgroundColor: 'red', width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{note}</Note>
      </div>
    );
  }
}

CommitmentHeader.propTypes = {
  commitment: PropTypes.shape({
    commitment: PropTypes.string,
    note: PropTypes.string
  })
};