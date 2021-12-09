import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearReposState,
  getReposURL,
  hideReposError,
  searchRepos,
} from "../../redux/repos/reposActions";
import ReposList from "../Repos/ReposList";

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
  }, []);

  if (error) {
    return <div>{`Пользователь "${login}" не найден`}</div>;
  } else if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ReposList />
    </>
  );
};

export default Repos;
