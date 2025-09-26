const dateDifference = (date1, date2) => {
  const difference = new Date(new Date(date1) - new Date(date2));
  return Math.abs(difference / (1000 * 60 * 60 * 24));
};

console.log(dateDifference("08/01/2025", "08/31/2025"));
