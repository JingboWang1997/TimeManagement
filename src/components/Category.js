import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

import CategoryHeader from './CategoryHeader';
import CategoryContent from './CategoryContent';

// Category represents each category card
export default class Category extends React.Component {
  render() {
    const { category } = this.props.data;
    return (
      <div>
        <Paper elevation={2} style={{width: 500, height: 500}}>
          <CategoryHeader category={category}/>
          <CategoryContent/>
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
  })
};