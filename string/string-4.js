/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const sentenceArray = s.split(" ");
  const result = [];
  sentenceArray.forEach((word) => {
    const index = word[word.length - 1];
    result[index] = word.slice(0, word.length - 1);
  });
  return result.join(" ").trim();
};
