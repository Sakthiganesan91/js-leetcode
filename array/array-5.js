/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const ruleKeyIndex = {
    type: 0,
    color: 1,
    name: 2,
  };
  let count = 0;
  items.forEach((item) => {
    if (item[ruleKeyIndex[ruleKey]] === ruleValue) count += 1;
  });

  return count;
};
