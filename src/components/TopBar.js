import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { setModalAction } from '../redux/actions/uiStateActions';
import { ADD_CATEGORY } from '../redux/actions/categoryActions';

// UI ipmorts
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

// styled components
import { Row } from '../styles/StyledComponents';

// components
import Modal from './Modal';

// TopBar represents the topbar in the main screen above the categories layout
export class TopBar extends React.Component {
  render() {
    const { dispatchSetModalAction } = this.props;
    return (
      <Row style={{justifyContent: 'flex-end', paddingRight: '5%', paddingTop: '1%'}}>
        <IconButton
          onClick={() => dispatchSetModalAction(true, ADD_CATEGORY)}
        >
          <AddIcon 
            fontSize='large'
          />
        </IconButton>
        <Modal />
      </Row>
    );
  }
}

TopBar.propTypes = {
  dispatchSetModalAction: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetModalAction: (open, task) => dispatch(setModalAction(open, task)),
  };
};

export default connect(null, mapDispatchToProps)(TopBar);