export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";

const log = "ACTIONS-CATEGORY: ";

export function addCategoryAction(category) {
  // console.log(log + "addCategory");
  return {
    type: ADD_CATEGORY,
    category,
  };
}

export function getCategoriesAction(categories) {
  console.log(log + "getCategories");
  return {
    type: GET_CATEGORIES,
    categories,
  };
}

export function deleteCategoryAction(id) {
  // console.log(log + 'deleteCategoryAction');
  return {
    type: DELETE_CATEGORY,
    id,
  };
}

export function editCategoryAction(category) {
  // console.log(log + 'editCategoryAction');
  return {
    type: EDIT_CATEGORY,
    category,
  };
}
