import React from 'react';
import PropTypes from 'prop-types';

import Commitment from './Commitment';


export default class CategoryContent extends React.Component {
  render() {
    const { commitments } = this.props;

    return (
      <div style={{padding: '5%'}}>
        {constructCommitmentComponents(commitments)}
      </div>     
    );
  }
}

CategoryContent.propTypes = {
  commitments: PropTypes.arrayOf(
    PropTypes.object
  ),
};

function constructCommitmentComponents(commitments) {
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