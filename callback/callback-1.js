const operate = (a, b, operation) => {
  return operation(a, b);
};

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

console.log(operate(5, 6, multiply));
console.log(operate(6, 6, add));
