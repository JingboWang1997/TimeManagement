import categories from './mockData/mockdata.json';
import db from './firebase';

// getMockCategories gets the mock categories data
export function getMockCategories() {
  return categories.data;
}

// getCategories gets all the categories from the db
export async function getCategories() {
  return db.collection('categories').get()
    .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()));
}