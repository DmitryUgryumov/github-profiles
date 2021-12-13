import React from "react";

import { calcDate } from "../../helpers/calcDate";

const ReposItem = ({ rep }) => {
  const dateCreate = calcDate(rep.created_at);
  const dateUpdate = calcDate(rep.updated_at);
  const hasPages = rep.has_pages ? "+" : "-";
  const language = rep.language || "-";
  const size = rep.size / 1000 + " Мб";

  return (
    <li className="repos__item">
      <h2 className="repos__title">
        <a href={rep.svn_url} target="_blank">
          {rep.name}
        </a>
      </h2>
      <p className="repos__info">
        <span>Создан: </span>
        {dateCreate}
      </p>
      <p className="repos__info">
        <span>Последнее обновление: </span>
        {dateUpdate}
      </p>
      <p className="repos__info">
        <span>Язык: </span>
        {language}
      </p>
      <p className="repos__info">
        <span>Размер репозитория: </span>
        {size}
      </p>
      <p className="repos__info">
        <span>GitHub pages: </span>
        {hasPages}
      </p>
    </li>
  );
};

export default ReposItem;
