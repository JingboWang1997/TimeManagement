import React from 'react';
import PropTypes from 'prop-types';

import { NoMarginP } from '../styles/StyledComponents';

// CommitmentHeader represents the header for each commitment, including the title and note
export default class CommitmentHeader extends React.Component {
  render() {
    const { commitment, url } = this.props.commitment;
    var moreInfo = url ? 
      <a href={url}>More Info</a> :
      null;
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
        <NoMarginP style={{fontWeight: 'bolder'}}>{commitment}</NoMarginP>
        {moreInfo}
        {/* <Note style={{width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{note}</Note> */}
      </div>
    );
  }
}

CommitmentHeader.propTypes = {
  commitment: PropTypes.shape({
    commitment: PropTypes.string,
    url: PropTypes.string
  })
};