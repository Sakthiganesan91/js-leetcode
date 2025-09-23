/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const result = [];
  indices.forEach((indice, index) => {
    result[indice] = s[index];
  });
  return result.join("");
};
