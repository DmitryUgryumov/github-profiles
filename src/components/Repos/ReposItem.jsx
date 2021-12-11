import React from "react";

const month = {
  1: "января",
  2: "февраля",
  3: "марта",
  4: "апреля",
  5: "мая",
  6: "июня",
  7: "июля",
  8: "августа",
  9: "сентября",
  10: "октября",
  11: "ноября",
  12: "декабря",
};

const calcDate = (d) => {
  const date = new Date(d);

  return `${date.getDate()}  ${
    month[date.getMonth() + 1]
  } ${date.getFullYear()} г.`;
};

const ReposItem = ({ rep }) => {
  const dateCreate = calcDate(rep.created_at);
  const dateUpdate = calcDate(rep.updated_at);
  const hasPages = rep.has_pages ? "+" : "-";
  const language = rep.language || "-";

  console.log(rep);

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
        <span>Язык: </span>
        {language}
      </p>
      <p className="repos__info">
        <span>Размер репозитория: </span>
        {rep.size}
      </p>
      <p className="repos__info">
        <span>GitHub pages: </span>
        {hasPages}
      </p>
    </li>
  );
};

export default ReposItem;
