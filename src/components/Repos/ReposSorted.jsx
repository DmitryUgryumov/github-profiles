import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { sortedRepos } from "../../redux/repos/reposActions";
import { sorted } from "../../helpers/sorted";

const ReposSorted = () => {
  const [sorting, setSorting] = useState(sorted);
  const [activeSort] = sorting.filter((s) => s.checked === true);
  const dispatch = useDispatch();

  const changeSorting = (e) => {
    const [newSorted] = sorting.filter(
      (sort) => sort.description === e.target.value
    );

    dispatch(sortedRepos(newSorted.sortFunction));

    setSorting((prev) =>
      prev.map((sort) => ({
        ...sort,
        checked: sort.description === newSorted.description,
      }))
    );
  };

  return (
    <div className="sorting">
      <h2 className="sorting__title">Сортировать по</h2>
      <select
        className="sorting__select"
        value={activeSort.description}
        onChange={changeSorting}
      >
        {sorting.map((sort) => (
          <option key={sort.id} value={sort.description}>
            {sort.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReposSorted;
