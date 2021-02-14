import {
  ADD_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
} from "../actions/categoryActions";
import {
  ADD_COMMITMENT,
  GET_COMMITMENTS,
  DELETE_COMMITMENT,
  EDIT_COMMITMENT,
} from "../actions/commitmentActions";

const log = "CATEGORY-REDUCER: ";

function categoryReducer(state = { categories: [] }, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      // console.log(log + ADD_CATEGORY);
      return Object.assign({}, state, {
        categories: [...state.categories, action.category],
      });
    case GET_CATEGORIES:
      // console.log(log + GET_CATEGORIES);
      return Object.assign({}, state, {
        categories: action.categories,
      });
    case DELETE_CATEGORY:
      // console.log(log + DELETE_CATEGORY);
      state.categories = state.categories.filter((c) => c.id !== action.id);
      return Object.assign({}, state);
    case EDIT_CATEGORY:
      // console.log(log + EDIT_CATEGORY);
      state.categories = state.categories.map((c) => {
        if (c.id === action.category.id) {
          c.title = action.category.title;
        }
        return c;
      });
      return Object.assign({}, state);

    case ADD_COMMITMENT:
      for (const category in state.categories) {
        console.log(action.commitment);
        // if (category.id === action.commitment)
      }
    case DELETE_COMMITMENT:
      state.categories = state.categories.map((c) => {
        if (c.id == action.categoryId) {
          c.commitments = c.commitments.filter(
            (commitment) => commitment.id !== action.id
          );
        }
        return c;
      });
      return Object.assign({}, state);

    default:
      // return initial state
      // console.log(log + 'default');
      return state;
  }
}

export default categoryReducer;
