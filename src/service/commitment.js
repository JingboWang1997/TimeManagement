import db from "./firebase";

const log = "SERVICE-COMMITMENT: ";

const collectionRef = db.collection("commitment");

/**
 * getCommitments gets all the categories for a user
 * @param {String} category_id
 * @returns {Array} commitments
 */
export function getCommitments(category_id) {
  // console.log(log + 'getCommitments');
  return collectionRef
    .where("category_id", "==", category_id)
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()))
    );
}

/**
 * addCommiments adds a new commitment for a category
 * @param {*} commitment
 */
export function addCommitment(commitment) {
  // console.log(log + 'addCommitment');
  return collectionRef.add(commitment);
}

/**
 * deleteCommitment deletes the commitment with the provided id
 * @param {String} id
 */
export function deleteCommitment(id) {
  // console.log(log + 'deleteCommitment');
  return collectionRef.doc(id).delete();
}

/**
 * editCommitment edits the corresponding commitment (mapped using id) with provided commitment
 * @param {Object} commitment
 */
export function editCommitment(commitment) {
  // console.log(log + "editCommitment");
  commitment = Object.assign({}, commitment);
  const id = commitment.id;
  delete commitment.id;
  return collectionRef.doc(id).update(commitment);
}
