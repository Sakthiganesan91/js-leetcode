/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const arr = new Array(26).fill(0);
  sentence.split("").forEach((ch) => {
    const index = ch.charCodeAt(0) - "a".charCodeAt(0);
    arr[index] = 1;
  });

  const flag = arr.every((val) => val === 1);
  return flag;
};
