import React from "react";
import { useSelector } from "react-redux";
import ReposItem from "./ReposItem";
import { useParams } from "react-router-dom";
import ReposSorted from "./ReposSorted";

const ReposList = () => {
  const { login } = useParams();
  const repos = useSelector((state) => state.repos.repos);
  console.log(login);

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

  return <p>{`У пользователя "${login}" нет репозиториев`}</p>;
};

export default ReposList;
