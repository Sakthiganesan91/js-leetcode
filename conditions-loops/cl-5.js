const isArmStrong = (num) => {
  let value = 0;
  let temp = num;
  while (num > 0) {
    const rem = num % 10;
    value += Math.pow(rem, 3);
    num = Math.floor(num / 10);
  }

  return temp === value;
};

let num = 370;
if (isArmStrong(num)) {
  console.log("Given is a armstrong number");
} else {
  console.log("Given is not a armstrong number");
}
