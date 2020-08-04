export const ADD_CATEGORY = 'ADD_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

const log = 'ACTIONS-CATEGORY: ';

export function addCategoryAction(category) {
  console.log(log + 'addCategory');
  return {     
    type: ADD_CATEGORY,
    category
  };
}

export function getCategoriesAction(categories) {
  console.log(log + 'getCategories');
  return {     
    type: GET_CATEGORIES,
    categories
  };
}

export function deleteCategoryAction(id) {
  console.log(log + 'deleteCategoryAction');
  return {
    type: DELETE_CATEGORY,
    id
  };
}