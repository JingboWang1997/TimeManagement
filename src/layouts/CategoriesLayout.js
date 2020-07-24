import React from 'react';

import { Grid } from '@material-ui/core';

import { getCategories } from '../service/category';

import Category from '../components/Category';

// CategoriesLayout lays out the category cards in a list
export default class CategoriesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: null
    };
  }

  componentDidMount() {
    getCategories()
      .then(data => this.setState({
        categories: data
      }));
  }

  // constructCategoryComponents constructs a list of Category Grid components from a list of category objects
  constructCategoryComponents(categories) {
    return categories ?
      categories.map(category => (
        <Grid item key={category.category}>
          <Category data={category}/>
        </Grid>
      )) :
      [];
  }

  render() {
    const { categories } = this.state;

    return (
      <Grid container spacing={3} style={{padding: '2%'}}>
        {this.constructCategoryComponents(categories)}
      </Grid>
    );
  }
}

