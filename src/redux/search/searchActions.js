import {
  CHANGE_VALUE,
  CLEAR_PROFILE,
  HIDE_ERROR,
  HIDE_LOADER,
  SEARCH_PROFILE,
  SHOW_ERROR,
  SHOW_LOADER,
} from "./searchTypes";

export function changeValue(newValue) {
  return {
    type: CHANGE_VALUE,
    value: newValue,
  };
}

export function showSearchLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideSearchLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showSearchError(name) {
  return {
    type: SHOW_ERROR,
    name,
  };
}

export function hideSearchError() {
  return {
    type: HIDE_ERROR,
  };
}

export function clearProfile() {
  return {
    type: CLEAR_PROFILE,
  };
}

export function searchProfile(name) {
  return function (dispatch) {
    dispatch(showSearchLoader());
    dispatch(hideSearchError());

    fetch(`https://api.github.com/users/${name}`)
      .then((response) =>
        response.ok ? response.json() : Promise.reject(name)
      )
      .then((json) => {
        dispatch({ type: SEARCH_PROFILE, profile: json });
        dispatch(hideSearchLoader());

        console.log(json);
      })
      .catch((err) => {
        dispatch(hideSearchLoader());
        dispatch(showSearchError(err));

        console.log(err);
      });
  };
}
