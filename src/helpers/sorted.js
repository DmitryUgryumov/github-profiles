export const sorted = [
  {
    id: 0,
    description: "по названию",
    sortFunction: (arr) =>
      arr.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        return nameA > nameB ? 1 : -1;
      }),
    checked: true,
  },
  {
    id: 1,
    description: "по дате создания",
    sortFunction: (arr) =>
      arr.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)),
    checked: false,
  },
  {
    id: 2,
    description: "по дате последнего обновления",
    sortFunction: (arr) =>
      arr.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)),
    checked: false,
  },
  {
    id: 3,
    description: "по размеру репозитроия",
    sortFunction: (arr) => arr.sort((a, b) => b.size - a.size),
    checked: false,
  },
];
