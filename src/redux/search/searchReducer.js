import {
  CHANGE_VALUE,
  CLEAR_PROFILE,
  HIDE_ERROR,
  HIDE_LOADER,
  SEARCH_PROFILE,
  SHOW_ERROR,
  SHOW_LOADER,
} from "./searchTypes";

const initialState = {
  value: "",
  profile: {},
  loading: false,
  error: false,
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: {},
      };
    case SEARCH_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.name,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}
