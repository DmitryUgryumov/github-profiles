import { CHANGE_TO_DARK, CHANGE_TO_LIGHT } from "./appTypes";

const initialState = {
  theme: "dark",
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TO_LIGHT:
      return {
        ...state,
        theme: "light",
      };
    case CHANGE_TO_DARK:
      return {
        ...state,
        theme: "dark",
      };
    default:
      return state;
  }
}
