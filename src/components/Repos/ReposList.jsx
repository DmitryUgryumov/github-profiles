import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ReposItem from "./ReposItem";
import ReposSorted from "./ReposSorted";

const ReposList = () => {
  const { login } = useParams();
  const repos = useSelector((state) => state.repos.repos);

  if (repos.length) {
    return (
      <>
        <ReposSorted />
        <ul className="repos">
          {repos.map((rep) => (
            <ReposItem key={rep.id} rep={rep} />
          ))}
        </ul>
      </>
    );
  }

  return (
    <h2 className="no-rep">{`У пользователя "${login}" нет репозиториев`}</h2>
  );
};

export default ReposList;
