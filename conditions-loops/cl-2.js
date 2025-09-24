const findSign = (num) =>
  num === 0 ? "Zero" : num > 0 ? "Positive" : "Negative";

const numbers = "1 3 -5";
const num = numbers.split(" ");

num.forEach((n) => {
  console.log(findSign(parseInt(n)));
});
