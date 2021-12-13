import React from "react";
import { Link } from "react-router-dom";

import { calcDate } from "../../helpers/calcDate";

const ProfileInfo = ({ profile }) => {
  const avatar = profile.avatar_url;
  const name = profile.name ? `${profile.name}` : "-";
  const dateCreate = calcDate(profile.created_at);
  const dateUpdate = calcDate(profile.updated_at);
  const location = profile.location ? `${profile.location}` : "-";

  return (
    <div className="search__profile">
      <a className="search__link" href={profile.html_url} target="_blank">
        <img className="search__img" src={avatar} alt="" />
      </a>
      <ul className="search__list">
        <li className="search__item">
          <span className="search__span">Имя:</span>
          {`${name}`}
        </li>
        <li className="search__item">
          <span className="search__span">Логин:</span>
          {`${profile.login}`}
        </li>
        <li className="search__item">
          <span className="search__span">Местонахождение:</span>
          {`${location}`}
        </li>
        <li className="search__item">
          <span className="search__span">Репозиториев:</span>
          {`${profile.public_repos}`}
        </li>
        <li className="search__item">
          <span className="search__span">Подписички:</span>
          {`${profile.followers}`}
        </li>
        <li className="search__item">
          <span className="search__span">Дата создания:</span>
          {`${dateCreate}`}
        </li>
        <li className="search__item">
          <span className="search__span">Последнее обновление:</span>
          {`${dateUpdate}`}
        </li>
        <li className="search__item search__item_link">
          <Link to={`/repos/${profile.login}`}>
            <button>Перейти к репозиториям</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
