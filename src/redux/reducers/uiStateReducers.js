import { SET_MODAL } from '../actions/uiStateActions';

const log = 'UI-STATE-REDUCER: ';

const initialState = {
  modalOpen: false,
  modalTask: ''
};

function uiStateReducer(state=initialState, action){
  switch(action.type) {
  case SET_MODAL:
    console.log(log + SET_MODAL);
    const { open, task } = action;
    return Object.assign({}, state, 
      {
        modalOpen: open,
        modalTask: task
      });
  default: 
    // return initial state
    console.log(log + 'default');
    return state;
  }
}

export default uiStateReducer;