import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearReposState,
  getReposURL,
  searchRepos,
} from "../../redux/repos/reposActions";

import ReposList from "../Repos/ReposList";
import PageLoader from "../UI/Loaders/PageLoader";

const Repos = () => {
  const { login } = useParams();
  const dispatch = useDispatch();
  const URL = useSelector((state) => state.repos.reposURL);
  const error = useSelector((state) => state.repos.error);
  const loading = useSelector((state) => state.repos.loading);

  useEffect(() => {
    if (URL && !error) {
      dispatch(searchRepos(URL));
    }
  }, [URL]);

  useEffect(() => {
    dispatch(getReposURL(login));

    return function () {
      dispatch(clearReposState());
    };
  }, [login]);

  if (error) {
    return <h2 className="error">{`Пользователь "${login}" не найден`}</h2>;
  } else if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <ReposList />
    </>
  );
};

export default Repos;
