import { SET_MODAL, CLOSE_MODAL, EDIT_MODAL_DATA } from '../actions/uiStateActions';

// const log = 'UI-STATE-REDUCER: ';

const initialState = {
  modalOpen: false,
  modalTask: '',
  modalData: {}
};

function uiStateReducer(state=initialState, action){
  switch(action.type) {
  case SET_MODAL:
    // console.log(log + SET_MODAL);
    const { task, data } = action;
    return Object.assign({}, state, 
      {
        modalOpen: true,
        modalTask: task,
        modalData: data
      });
  case CLOSE_MODAL:
    // console.log(log + CLOSE_MODAL);
    return initialState;
  case EDIT_MODAL_DATA:
    // console.log(log + EDIT_MODAL_DATA);
    return Object.assign({}, state, 
      {
        modalData: Object.assign({}, state.modalData, action.data)
      });
  default: 
    // return initial state
    // console.log(log + 'default');
    return state;
  }
}

export default uiStateReducer;