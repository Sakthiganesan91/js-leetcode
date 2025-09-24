const filterArray = (arr) => arr.filter((val) => val > 0);

const filter = (arr, func) => {
  return func(arr);
};

console.log(filter([1, -2, 3, 4, -4, -4, -98], filterArray));
