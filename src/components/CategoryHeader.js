import React from 'react';
import PropTypes from 'prop-types';

// UI import
import { Paper, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';

// styled components
import { Row } from '../styles/StyledComponents';

// redux
import { connect } from 'react-redux';
import { deleteCategoryAction } from '../redux/actions/categoryActions';

// services
import { deleteCategory } from '../service/category';

// CategoryHeader represents the header (title and the hovering paper) of a category card
class CategoryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // handleClickDelete deletes current category
  handleClickDelete() {
    const { id, dispatchDeleteCategoryAction } = this.props;
    deleteCategory(id)
      .then(() => dispatchDeleteCategoryAction(id));
  }

  // handleClickEdit edits current category
  handleClickEdit() {
    console.log('click edit');
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <Paper elevation={2} style={{ padding: 5 }}>
          <Row style={{ position: 'relative' }}>
            <h2 style={{ margin: 10 }}>{name}</h2>
            <Row style={{ position: 'absolute', rop: 0, right: 0 }}>
              <IconButton
                onClick={this.handleClickEdit}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={this.handleClickDelete}
              >
                <RemoveIcon style={{ color: 'red' }}/>
              </IconButton>
            </Row>
          </Row>
        </Paper>
      </div>
    );
  }
}

CategoryHeader.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  dispatchDeleteCategoryAction: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteCategoryAction: (id) => dispatch(deleteCategoryAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryHeader);