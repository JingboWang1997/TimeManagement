export const SET_MODAL = 'SET_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const EDIT_MODAL_DATA = 'EDIT_MODAL_DATA';

// const log = 'ACTIONS-UI-STATE: ';

export function setModalAction(task, data) {
  // console.log(log + 'setModalAction');
  return {     
    type: SET_MODAL,
    task,
    data
  };
}

export function closeModalAction() {
  // console.log(log + 'closeModalAction');
  return {     
    type: CLOSE_MODAL
  };
}

export function editModalDataAction(data) {
  // console.log(log + 'editModalDataAction');
  return {
    type: EDIT_MODAL_DATA,
    data
  };
}