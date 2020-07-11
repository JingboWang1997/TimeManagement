import React from 'react';

import { Grid } from '@material-ui/core';

import { getCategories } from '../data/category';

import Category from '../components/Category';

export default class CategoriesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: null
    };
  }

  componentDidMount() {
    this.setState({
      categories: getCategories()
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <Grid container spacing={3} style={{padding: '2%'}}>
        {constructCategoryComponents(categories)}
      </Grid>
    );
  }
}

// constructCategoryComponents constructs a list of Category Grid components from a list of category objects
function constructCategoryComponents(categories) {
  return categories ?
    categories.map(category => (
      <Grid item key={category.category}>
        <Category data={category}/>
      </Grid>
    )) :
    [];
}