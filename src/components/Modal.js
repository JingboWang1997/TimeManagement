import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { setModalAction } from '../redux/actions/uiStateActions';
import { addCategoryAction } from '../redux/actions/categoryActions';

// UI ipmorts
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@material-ui/core';

// services
import { addCategory } from '../service/category';

// Modal represents
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  // handleClickSave writes current data to db and update the store
  handleClickSave() {
    const { name } = this.state;
    const { dispatchAddCategoryAction, dispatchSetModalAction } = this.props;
    addCategory({name})
      .then(docRef => docRef.get())
      .then(docSnapshot => dispatchAddCategoryAction(Object.assign({id: docSnapshot.id}, docSnapshot.data())));
    dispatchSetModalAction(false);
  }

  render() {
    const { open, dispatchSetModalAction } = this.props;
    return (
      <div>
        <Dialog open={open} onClose={() => dispatchSetModalAction(false)}>
          <DialogTitle>Add a new category</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Add a new category includes a whole new set of commitments. This can be a new habit or aspect of life you want to expand to.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="name"
              fullWidth
              onChange={(event) => {
                this.setState({
                  name: event.target.value
                });
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => dispatchSetModalAction(false)} color="primary">
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
  dispatchSetModalAction: PropTypes.func,
  dispatchAddCategoryAction: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    open: state.uiStateReducer.modalOpen
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetModalAction: (open) => dispatch(setModalAction(open)),
    dispatchAddCategoryAction: (category) => dispatch(addCategoryAction(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);