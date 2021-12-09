import {
  CLEAR_REPOS_STATE,
  GET_REPOS_URL,
  HIDE_ERROR,
  HIDE_LOADER,
  SEARCH_REPOS,
  SHOW_ERROR,
  SORTED_REPOS,
} from "./reposTypes";

export function hideReposLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function clearReposState() {
  return {
    type: CLEAR_REPOS_STATE,
  };
}

export function showReposError() {
  return {
    type: SHOW_ERROR,
  };
}

export function hideReposError() {
  return {
    type: HIDE_ERROR,
  };
}

export function sortedRepos(sortFunction) {
  return {
    type: SORTED_REPOS,
    sortFunction: sortFunction,
  };
}

export function getReposURL(login) {
  return function (dispatch) {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) =>
        response.ok ? response.json() : Promise.reject(login)
      )
      .then((json) => {
        dispatch({ type: GET_REPOS_URL, reposURL: json.repos_url });
      })
      .catch((login) => {
        dispatch(hideReposLoader());
        dispatch(showReposError());
      });
  };
}

export function searchRepos(reposURL) {
  return function (dispatch) {
    fetch(reposURL)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((json) => {
        dispatch({ type: SEARCH_REPOS, repos: json });
        dispatch(hideReposLoader());
        console.log(json);
      })
      .catch((err) => {
        dispatch(hideReposLoader());
        dispatch(showReposError());
      });
  };
}
