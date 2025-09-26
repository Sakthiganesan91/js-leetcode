const calculateYesterday = (date) => {
  //   const yesterday = new Date(date) - 1000 * 3600 * 24;
  //   return new Date(yesterday).toDateString();
  date = new Date(date);
  date.setDate(date.getDate() - 1);
  return date.toDateString();
};

console.log(calculateYesterday("09/09/2025"));
