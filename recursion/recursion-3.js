function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 5;

const ans = [];
for (let i = 0; i < n; i++) {
  ans.push(fibonacci(i));
}
console.log(ans);
