import categoryData from './mockData/mockdata.json';
import db from './firebase';

// const log = 'SERVICE-CATEGORY: ';

const collectionRef = db.collection('categories');

// getMockCategories gets the mock categories data
export function getMockCategories() {
  // console.log(log + 'getMockCategories');
  return categoryData.categories;
}

// getCategories gets all the categories from the db
export function getCategories() {
  // console.log(log + 'getCategories');
  return collectionRef.get()
    .then(querySnapshot => querySnapshot.docs.map(doc => Object.assign({id: doc.id}, doc.data())));
}

// addCategory adds a new category
export function addCategory(category) {
  // console.log(log + 'addCategory');
  return collectionRef.add(category);
}

// deleteCategory deletes the category with the provided id
export function deleteCategory(id) {
  // console.log(log + 'deleteCategory');
  return collectionRef.doc(id).delete();
}

// editCategory edits the corresponding category with provided category
export function editCategory(category) {
  // console.log(log + 'editCategory');
  category = Object.assign({}, category);
  const id = category.id;
  delete category.id;
  return collectionRef.doc(id).update(category);
}