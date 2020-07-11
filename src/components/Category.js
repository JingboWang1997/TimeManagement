import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

import CategoryHeader from './CategoryHeader';
import CategoryContent from './CategoryContent';

// Category represents each category card
export default class Category extends React.Component {
  render() {
    const { data, style } = this.props;
    const { category, commitments } = data;
    return (
      <div>
        <Paper elevation={2} style={style, {width: 400, height: 500}}>
          <CategoryHeader category={category}/>
          <CategoryContent commitments={commitments}/>
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    commitments: PropTypes.array,
  }),
  style: PropTypes.object,
};