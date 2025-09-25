const sumOfArray = (arr, n) => {
  if (n === 0) return arr[0];

  return arr[n] + sumOfArray(arr, n - 1);
};

console.log(sumOfArray([1, 2, 3, 4, 5], 4));
