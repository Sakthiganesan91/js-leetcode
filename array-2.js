//find the maximum number of words in sentences
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxCountOfWords = 0;
  sentences.forEach((sentence) => {
    const countOfWords = sentence.split(" ").length;
    maxCountOfWords = Math.max(maxCountOfWords, countOfWords);
  });

  return maxCountOfWords;
};
