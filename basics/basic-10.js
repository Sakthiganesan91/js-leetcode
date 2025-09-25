const isSquare = (num) => {
  if (num < 0) return "No";
  let a = Math.sqrt(num);
  if (Number.isInteger(a)) {
    return "Yes";
  }
  return "No";
};

console.log(isSquare(16));
