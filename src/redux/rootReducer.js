import { combineReducers } from "redux";
import { searchReducer } from "./search/searchReducer";
import { reposReducer } from "./repos/reposReduser";
import { appReducer } from "./app/appReducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  repos: reposReducer,
  app: appReducer,
});
