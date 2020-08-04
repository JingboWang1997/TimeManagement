export const SET_MODAL = 'SET_MODAL';

const log = 'ACTIONS-UI-STATE: ';

export function setModalAction(open) {
  console.log(log + 'setModalAction');
  return {     
    type: SET_MODAL,
    open
  };
}