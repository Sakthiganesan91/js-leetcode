const getMonthName = (date) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const m = new Date(date).getMonth();
  return month[m];
};

console.log(getMonthName("09/25/2002"));
