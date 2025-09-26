const binaryToDecimal = (num, power) => {
  if (num <= 0) return 0;

  return (
    (num % 10) * Math.pow(2, power) +
    binaryToDecimal(Math.floor(num / 10), power + 1)
  );
};

console.log(binaryToDecimal(1111, 0));
