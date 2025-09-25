const getDays = (date) => {
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  return new Date(year, month, 0).getDate();
};

console.log(getDays("02/09/2025"));
