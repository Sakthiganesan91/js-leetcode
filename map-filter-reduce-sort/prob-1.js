let arr = [1, -4, 5, -3, 6, 7];

const sumOfArray = arr
  .filter((num) => num > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(sumOfArray);
