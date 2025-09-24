const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i < Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let num = 87;

if (isPrime(num)) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
}
