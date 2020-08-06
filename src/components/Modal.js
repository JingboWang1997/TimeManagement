import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { closeModalAction, editModalDataAction } from '../redux/actions/uiStateActions';
import { addCategoryAction, editCategoryAction, EDIT_CATEGORY, ADD_CATEGORY } from '../redux/actions/categoryActions';

// UI ipmorts
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@material-ui/core';

// services
import { addCategory, editCategory } from '../service/category';

// Modal represents
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  // handleClickSave writes current data to db and update the store
  handleClickSave() {
    const { dispatchAddCategoryAction, dispatchCloseModalAction, dispatchEditCategoryAction, data, task } = this.props;
    switch (task) {
    case EDIT_CATEGORY:
      editCategory(data)
        .then(() => dispatchEditCategoryAction(data));
      break;
    case ADD_CATEGORY:
      addCategory(data)
        .then(docRef => docRef.get())
        .then(docSnapshot => dispatchAddCategoryAction(Object.assign({id: docSnapshot.id}, docSnapshot.data())));
      break;
    }
    dispatchCloseModalAction();
  }

  render() {
    const { open, task, data, dispatchCloseModalAction, dispatchEditModalDataAction } = this.props;
    var title = '';
    var description = '';
    switch (task) {
    case EDIT_CATEGORY:
      title = 'Edit a Category';
      description = 'Edit the name of this category to make it more descriptive';
      break;
    case ADD_CATEGORY:
      title = 'Add a New Category';
      description = 'Add a new category includes a whole new set of commitments. This can be a new habit or aspect of life you want to expand to';
      break;
    }
    return (
      <div>
        <Dialog open={open} onClose={dispatchCloseModalAction}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {description}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="name"
              fullWidth
              onChange={(event) => dispatchEditModalDataAction(Object.assign(data, {name: event.target.value}))}
              value={data.name}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={dispatchCloseModalAction} color="primary">
            Cancel
            </Button>
            <Button onClick={this.handleClickSave} color="primary">
            Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  task: PropTypes.string,
  data: PropTypes.object,
  dispatchCloseModalAction: PropTypes.func,
  dispatchAddCategoryAction: PropTypes.func,
  dispatchEditModalDataAction: PropTypes.func,
  dispatchEditCategoryAction: PropTypes.func
};

const mapStateToProps = (state) => {
  const { modalOpen, modalTask, modalData } = state.uiStateReducer;
  return {
    open: modalOpen,
    task: modalTask,
    data: modalData
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCloseModalAction: () => dispatch(closeModalAction()),
    dispatchAddCategoryAction: (category) => dispatch(addCategoryAction(category)),
    dispatchEditModalDataAction: (data) => dispatch(editModalDataAction(data)),
    dispatchEditCategoryAction: (category) => dispatch(editCategoryAction(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);