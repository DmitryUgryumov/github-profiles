import { combineReducers } from "redux";
import { searchReducer } from "./search/searchReducer";
import { reposReducer } from "./repos/reposReduser";

export const rootReducer = combineReducers({
  search: searchReducer,
  repos: reposReducer,
});
