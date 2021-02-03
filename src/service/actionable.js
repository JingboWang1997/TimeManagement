import db from './firebase';

const log = 'SERVICE-ACTIONABLE: ';

const collectionRef = db.collection('actionable');

/**
 * getActionables gets all the actionables for a commitment
 * @param {String} commitment_id 
 * @returns {Array} actionables
 */
export function getActionables(commitment_id) {
  // console.log(log + 'getActionables');
  return collectionRef.where('commitment_id', '==', commitment_id).get()
    .then(querySnapshot => querySnapshot.docs.map(doc => Object.assign({id: doc.id}, doc.data())));
}

/**
 * addActionable adds a new actionable for a commitment
 * @param {*} actionable
 */
export function addActionable(actionable) {
  // console.log(log + 'addActionable');
  return collectionRef.add(actionable);
}

/**
 * deleteActionable deletes the actionable with the provided id
 * @param {String} id 
 */
export function deleteActionable(id) {
  // console.log(log + 'deleteActionable');
  return collectionRef.doc(id).delete();
}

/**
 * editActionable edits the corresponding actionable (mapped using id) with provided actionable
 * @param {Object} actionable 
 */
export function editActionable(actionable) {
  // console.log(log + 'editActionable');
  actionable = Object.assign({}, actionable);
  const id = actionable.id;
  delete actionable.id;
  return collectionRef.doc(id).update(actionable);
}