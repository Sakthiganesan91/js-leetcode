/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = {};
  const order = [];
  for (let i = 0; i < names.length; i++) {
    people[heights[i]] = names[i];
  }
  heights.sort((a, b) => b - a);

  heights.forEach((height) => {
    order.push(people[height]);
  });
  return order;
};
