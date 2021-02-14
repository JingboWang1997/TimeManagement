export const ADD_COMMITMENT = "ADD_COMMITMENT";
export const GET_COMMITMENTS = "GET_COMMITMENTS";
export const DELETE_COMMITMENT = "DELETE_COMMITMENT";
export const EDIT_COMMITMENT = "EDIT_COMMITMENT";

const log = "ACTIONS-COMMITMENT: ";

export function addCommitmentAction(commitment) {
  console.log(log + "addCommitment");
  return {
    type: ADD_COMMITMENT,
    commitment,
  };
}

export function getCommitmentsAction(commitments) {
  console.log(log + "getCommitments");
  return {
    type: GET_COMMITMENTS,
    commitments,
  };
}

export function deleteCommitmentAction(categoryId, id) {
  console.log(log + "deleteCommitment");
  return {
    type: DELETE_COMMITMENT,
    categoryId,
    id,
  };
}

export function editCommitmentAction(categoryId, commitment) {
  console.log(log + "editCommitment");
  return {
    type: EDIT_COMMITMENT,
    categoryId,
    commitment,
  };
}
