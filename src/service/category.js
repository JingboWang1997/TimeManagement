import categoryData from "./mockData/mockdata.json";
import db from "./firebase";

const log = "SERVICE-CATEGORY: ";

const collectionRef = db.collection("categories");

/**
 * getMockCategories gets the mock categories data
 * @returns {Array} mock categories
 */
export function getMockCategories() {
  console.log(log + "getMockCategories");
  return categoryData.categories;
}

/**
 * getCategories gets all the categories for a user
 * @param {String} user_id
 * @returns {Array} categories
 */
export function getCategories(user_id) {
  console.log(log + "getCategories");
  return collectionRef
    .where("user_id", "==", user_id)
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()))
    );
}

/**
 * addCategory adds a new category for a user
 * @param {*} category
 */
export function addCategory(category) {
  console.log(log + "addCategory");
  return collectionRef.add(category);
}

/**
 * deleteCategory deletes the category with the provided id
 * @param {String} id
 */
export function deleteCategory(id) {
  console.log(log + "deleteCategory");
  return collectionRef.doc(id).delete();
}

/**
 * editCategory edits the corresponding category (mapped using id) with provided category
 * @param {Object} category
 */
export function editCategory(category) {
  console.log(log + "editCategory");
  category = Object.assign({}, category);
  const id = category.id;
  delete category.id;
  return collectionRef.doc(id).update(category);
}
