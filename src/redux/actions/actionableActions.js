export const ADD_ACTIONABLE = "ADD_ACTIONABLE";
export const GET_ACTIONABLES = "GET_ACTIONABLES";
export const DELETE_ACTIONABLE = "DELETE_ACTIONABLE";
export const EDIT_ACTIONABLE = "EDIT_ACTIONABLE";

const log = "ACTIONS-ACTIONABLE: ";

export function addActionableAction(actionable) {
  return {
    type: ADD_ACTIONABLE,
    actionable,
  };
}

export function getActionablesAction(actionables) {
  return {
    type: GET_ACTIONABLES,
    actionables,
  };
}

export function deleteActionableAction(categoryId, commitmentId, id) {
  return {
    type: DELETE_ACTIONABLE,
    categoryId,
    commitmentId,
    id,
  };
}

export function editActionableAction(categoryId, commitmentId, actionable) {
  return {
    type: EDIT_ACTIONABLE,
    categoryId,
    commitmentId,
    actionable,
  };
}
