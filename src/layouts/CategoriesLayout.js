import React from 'react';
import PropTypes from 'prop-types';

// UI import
import { Grid } from '@material-ui/core';

// components
import Category from '../components/Category';

// service
import { getCategories, getMockCategories } from '../service/category';

// redux
import { getCategoriesAction } from '../redux/actions/categoryActions';
import { connect } from 'react-redux';

// CategoriesLayout lays out the category cards in a list
class CategoriesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.constructCategoryComponents = this.constructCategoryComponents.bind(this);
  } 

  componentDidMount() {
    const { dispatchGetCategories } = this.props;
    dispatchGetCategories(getMockCategories());
    // getCategories().then(categories => dispatchGetCategories(categories));
  }

  // constructCategoryComponents constructs a list of Category Grid components from a list of category objects
  constructCategoryComponents() {
    const { categories } = this.props;
    return categories ?
      categories.map(category => (
        <Grid item key={category.name}>
          <Category category={category}/>
        </Grid>
      )) :
      [];
  }

  render() {
    return (
      <Grid container spacing={3} style={{padding: '2%'}}>
        {this.constructCategoryComponents()}
      </Grid>
    );
  }
}

CategoriesLayout.propTypes = {
  dispatchGetCategories: PropTypes.func,
  categories: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetCategories: (categories) => dispatch(getCategoriesAction(categories)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesLayout);

