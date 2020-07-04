import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

export default class CategoryHeader extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <Paper elevation={2} style={{ padding: 5 }}>
          <h2 style={{ margin: 10 }}>{category}</h2>
        </Paper>
      </div>
    );
  }
}

CategoryHeader.propTypes = {
  category: PropTypes.string
};