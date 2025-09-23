/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  const regex = new RegExp(`[${allowed}]`, "g");
  words.forEach((word) => {
    const res = word.replace(regex, "");
    if (res.length === 0) count += 1;
  });
  return count;
};
