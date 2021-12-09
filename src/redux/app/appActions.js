import { CHANGE_TO_DARK, CHANGE_TO_LIGHT } from "./appTypes";

export function changeToLight() {
  return {
    type: CHANGE_TO_LIGHT,
  };
}

export function changeToDark() {
  return {
    type: CHANGE_TO_DARK,
  };
}
