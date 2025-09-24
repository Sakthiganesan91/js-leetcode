/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const word1Obj = {};
  const word2Obj = {};
  words1.forEach((word) => {
    if (!word1Obj[word]) {
      word1Obj[word] = 1;
    } else {
      word1Obj[word] = word1Obj[word] += 1;
    }
  });
  words2.forEach((word) => {
    if (!word2Obj[word]) {
      word2Obj[word] = 1;
    } else {
      word2Obj[word] = word2Obj[word] += 1;
    }
  });
  let c = 0;
  const set = new Set(words1.concat(words2));
  set.forEach((word) => {
    const count1 = word1Obj[word] ?? 0;
    const count2 = word2Obj[word] ?? 0;
    if (count1 === 1 && count2 === 1) c++;
  });
  return c;
};
