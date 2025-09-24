const reverseNumber = (num) => {
  if (num < 0) return 0;
  let number = 0;
  while (num > 0) {
    let rem = num % 10;
    number = number * 10 + rem;
    num = Math.floor(num / 10);
  }
  return number;
};

console.log(reverseNumber(876000));
