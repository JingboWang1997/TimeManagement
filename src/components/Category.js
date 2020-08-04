import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

import CategoryHeader from './CategoryHeader';
import CategoryContent from './CategoryContent';

// Category represents each category card
export default class Category extends React.Component {
  render() {
    const { category, style } = this.props;
    const { name, commitments, id } = category;
    return (
      <div>
        <Paper elevation={2} style={style, {width: 400, height: 500}}>
          <CategoryHeader name={name} id={id}/>
          <CategoryContent commitments={commitments}/>
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    commitments: PropTypes.array,
  }),
  style: PropTypes.object,
};