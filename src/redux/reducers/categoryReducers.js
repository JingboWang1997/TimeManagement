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
import {
  ADD_ACTIONABLE,
  GET_ACTIONABLES,
  DELETE_ACTIONABLE,
  EDIT_ACTIONABLE,
} from "../actions/actionableActions";

const log = "CATEGORY-REDUCER: ";

function categoryReducer(state = { categories: [] }, action) {
  switch (action.type) {
    // CATEGORIES
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

    // COMMITMENTS
    case ADD_COMMITMENT:
      for (const category in state.categories) {
        console.log(action.commitment);
        // if (category.id === action.commitment)
      }
    case EDIT_COMMITMENT:
      console.log("EDIT_COMMITMENT");
      state.categories = state.categories.map((category) => {
        if (category.id === action.categoryId) {
          category.commitments = category.commitments.map((commitment) => {
            if (commitment.id === action.commitment.id) {
              commitment = action.commitment;
            }
            return commitment;
          });
        }
        return category;
      });
      return Object.assign({}, state);
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

    // ACTIONABLES
    case DELETE_ACTIONABLE:
      state.categories = state.categories.map((category) => {
        if (category.id === action.categoryId) {
          category.commitments = category.commitments.map((commitment) => {
            if (commitment.id === action.commitmentId) {
              commitment.actionables = commitment.actionables.filter(
                (actionable) => actionable.id !== action.id
              );
            }
            return commitment;
          });
        }
        return category;
      });
      return Object.assign({}, state);

    default:
      // return initial state
      // console.log(log + 'default');
      return state;
  }
}

export default categoryReducer;
