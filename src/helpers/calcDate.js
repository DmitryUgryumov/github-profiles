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

export const calcDate = (d) => {
  const date = new Date(d);

  return `${date.getDate()}  ${
    month[date.getMonth() + 1]
  } ${date.getFullYear()} г.`;
};
