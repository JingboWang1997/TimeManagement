import { SET_MODAL } from '../actions/uiStateActions';

const log = 'UI-STATE-REDUCER: ';

const initialState = {
  modalOpen: false
};

function uiStateReducer(state=initialState, action){
  switch(action.type) {
  case SET_MODAL:
    console.log(log + SET_MODAL);
    return Object.assign({}, state, 
      {
        modalOpen: action.open
      });
  default: 
    // return initial state
    console.log(log + 'default');
    return state;
  }
}

export default uiStateReducer;