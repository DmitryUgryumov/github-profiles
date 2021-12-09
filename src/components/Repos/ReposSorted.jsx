import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortedRepos } from "../../redux/repos/reposActions";

const sorted = [
  {
    id: 0,
    description: "по названию",
    // sortFunction: (arr) => arr.sort((a, b) => a.name > b.name),
    sortFunction: (arr) =>
      arr.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
      }),
    checked: true,
  },
  {
    id: 1,
    description: "по дате создания",
    sortFunction: (arr) =>
      arr.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)),
    checked: false,
  },
  {
    id: 2,
    description: "по дате последнего обновления",
    sortFunction: (arr) =>
      arr.sort((a, b) => Date.parse(a.updated_at) - Date.parse(b.updated_at)),
    checked: false,
  },
  {
    id: 3,
    description: "по размеру репозитроия",
    sortFunction: (arr) =>
      arr.sort((a, b) => Date.parse(a.size) - Date.parse(b.size)),
    checked: false,
  },
];

const ReposSorted = () => {
  const [sorting, setSorting] = useState(sorted);
  const [activeSort] = sorting.filter((s) => s.checked === true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(sorting);
  }, [sorting]);

  const optionHandler = (e) => {
    const [newSorted] = sorting.filter(
      (sort) => sort.description === e.target.value
    );

    dispatch(sortedRepos(newSorted.sortFunction));

    console.log(newSorted.description);

    setSorting((prev) =>
      prev.map((sort) => ({
        ...sort,
        checked: sort.description === newSorted.description,
      }))
    );
  };

  return (
    <select value={activeSort.description} onChange={optionHandler}>
      {sorting.map((sort) => (
        <option key={sort.id} value={sort.description}>
          {sort.description}
        </option>
      ))}
    </select>
  );
};

export default ReposSorted;
