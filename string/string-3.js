/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let b = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") b -= 1;
    if (s[i] === "L") b += 1;
    if (b === 0) count += 1;
  }
  return count;
};
