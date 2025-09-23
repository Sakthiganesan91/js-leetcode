/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const multiply = (values) => values.reduce((a, b) => a * b, 1);
  nums.sort((a, b) => a - b);
  return Math.abs(multiply(nums.slice(0, 2)) - multiply(nums.slice(-2)));
};
