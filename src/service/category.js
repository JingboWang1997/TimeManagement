import categoryData from './mockData/mockdata.json';
import db from './firebase';

const log = 'SERVICE-CATEGORY: ';

const collectionRef = db.collection('categories');

// getMockCategories gets the mock categories data
export function getMockCategories() {
  console.log(log + 'getMockCategories');
  return categoryData.categories;
}

// getCategories gets all the categories from the db
export function getCategories() {
  console.log(log + 'getCategories');
  return collectionRef.get()
    .then(querySnapshot => querySnapshot.docs.map(doc => Object.assign({id: doc.id}, doc.data())));
}

// addCategory adds a new category
export function addCategory(category) {
  console.log(log + 'addCategory');
  return collectionRef.add(category);
}