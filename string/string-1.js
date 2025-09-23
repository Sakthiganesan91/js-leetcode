/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const regex = new RegExp(`[${jewels}]`, "g");
  return stones.length - stones.replace(regex, "").length;
};
