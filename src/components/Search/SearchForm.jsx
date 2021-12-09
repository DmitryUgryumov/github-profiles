import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  clearProfile,
  hideSearchError,
  searchProfile,
} from "../../redux/search/searchActions";

const SearchForm = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.search.value);
  const error = useSelector((state) => state.search.error);

  const formHandler = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    dispatch(searchProfile(inputValue));
  };

  const inputHandler = (e) => dispatch(changeValue(e.target.value));

  const clearState = () => {
    dispatch(changeValue(""));
    dispatch(clearProfile());

    if (error) {
      dispatch(hideSearchError());
    }
  };

  return (
    <form className="search__form " onSubmit={formHandler}>
      <input
        className="search__input"
        placeholder="введите логин пользователя"
        type="text"
        value={inputValue}
        onChange={inputHandler}
      />
      <button className="search__button" type="button" onClick={clearState}>
        Сбросить
      </button>
      <button className="search__button" type="submit">
        Искать
      </button>
    </form>
  );
};

export default SearchForm;
