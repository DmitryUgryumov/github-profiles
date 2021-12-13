import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeToDark, changeToLight } from "../../redux/app/appActions";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);

  useEffect(() => {
    setTimeout(() => {
      document.body.style.transition = "color 1s, background-color 1s";
    }, 1000);
  }, []);

  useEffect(() => (document.body.className = theme));

  const changeTheme = (e) => {
    e.target.classList.toggle("header__circle_active");

    theme === "dark" ? dispatch(changeToLight()) : dispatch(changeToDark());
  };

  return (
    <div className="header">
      <div className="header-container">
        <Link className="header__title" to="/">
          GitHub profiles
        </Link>
        <div className="header__button-container">
          <button className="header__circle" onClick={changeTheme}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
