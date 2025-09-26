const convertTimeStampToDate = (timestamp) =>
  new Date(timestamp * 1000).toDateString();

console.log(convertTimeStampToDate(1756856675));
