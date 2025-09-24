let arr = [12, 46, 32, 64];
const length = arr.length;
arr.sort((a, b) => a - b);
let median;
if (length % 2 !== 0) {
  median = arr[length / 2];
} else {
  median = (arr[length / 2] + arr[length / 2 - 1]) / 2;
}

const mean = arr.reduce((acc, curr) => acc + curr, 0) / length;

console.log(median + " Median");
console.log(mean + " Mean");
