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
    var categoriesComponents = [];
    if (categories !== null) {
      var curRow = [];
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        var component =  (
          <Grid item xs key={i}>
            <Category data={category} />
          </Grid>
        );
        if (curRow.length < 3) {
          curRow.push(component);
        } else {
          categoriesComponents.push(
            <Grid key={categoriesComponents.length} container spacing={3}>
              {curRow}
            </Grid>
          );
          curRow = [component];
        }
      }
      categoriesComponents.push(
        <Grid key={categoriesComponents.length} container spacing={3}>
          {curRow}
        </Grid>
      );
    }
        
    return (
      <div>
        <Grid container>
          {categoriesComponents}
        </Grid>
      </div>
    );
  }
}