import React from 'react';
import PropTypes from 'prop-types';

import Commitment from './Commitment';

// CategoryContent represetns the content (commitments and actionables) of each category card
export default class CategoryContent extends React.Component {
  // constructCommitmentComponents constructs a list of Commitment components from a list of commitment objects
  constructCommitmentComponents(commitments) {
    return commitments ?
      commitments.map(commitment => (
        <Commitment 
          key={commitment.commitment} 
          style={{marginBottom: '7%'}}
          commitment={commitment}
        />
      )) :
      [];
  }

  render() {
    const { commitments } = this.props;
    return (
      <div style={{padding: '5%'}}>
        {this.constructCommitmentComponents(commitments)}
      </div>     
    );
  }
}

CategoryContent.propTypes = {
  commitments: PropTypes.arrayOf(
    PropTypes.object
  ),
};