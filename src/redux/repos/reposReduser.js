import {
  CLEAR_REPOS_STATE,
  GET_REPOS_URL,
  HIDE_ERROR,
  HIDE_LOADER,
  SEARCH_REPOS,
  SHOW_ERROR,
  SORTED_REPOS,
} from "./reposTypes";

const initialState = {
  repos: [],
  reposURL: "",
  loading: true,
  error: false,
};

export function reposReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.repos,
      };
    case GET_REPOS_URL:
      return {
        ...state,
        reposURL: action.reposURL,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: true,
      };
    case SORTED_REPOS:
      return {
        ...state,
        repos: action.sortFunction(state.repos.slice()),
      };
    case CLEAR_REPOS_STATE:
      return {
        repos: [],
        reposURL: "",
        loading: true,
        error: false,
      };
    default:
      return state;
  }
}
