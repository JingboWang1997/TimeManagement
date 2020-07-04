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
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        categoriesComponents.push(<Category data={category} />);
      }
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