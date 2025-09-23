/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];

  nums.forEach((number, index) => {
    let count = 0;
    nums.forEach((num, i) => {
      if (index === i) return;
      if (number > num) count += 1;
    });
    result.push(count);
  });

  return result;
};
