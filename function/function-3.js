const findCombination = (str) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    let com = "";
    for (let j = i; j < str.length; j++) {
      com += str[j];
      result.push(com);
    }
  }
  return result;
};

console.log(findCombination("one"));
