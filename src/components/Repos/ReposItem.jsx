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

  return (
    <li className="repos__item">
      <p className="repos__title">
        <a href={rep.svn_url} target="_blank">
          {rep.name}
        </a>
      </p>
      <p>{`Создан: ${dateCreate}`}</p>
      <p>{`Последнее обновление: ${dateUpdate}`}</p>
      <p>{`Язык: ${rep.language}`}</p>
      <p>{`Размер репозитория: ${rep.size}`}</p>
      <p>{`GitHub pages: ${rep.has_pages}`}</p>
    </li>
  );
};

export default ReposItem;
