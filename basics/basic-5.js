const divide = (a, b) => (a > 0 && b > 0 ? (a > b ? a / b : b / a) : 0);
const multiply = (a, b) => a * b;

console.log(divide(32, 4));
console.log(multiply(6, 7));
