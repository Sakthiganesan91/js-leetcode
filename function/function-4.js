const countOccurences = (string) => {
  const ansArray = new Array(26).fill(0);
  const arrObj = {};
  for (let i = 0; i < string.length; i++) {
    const charCode = string[i].charCodeAt(0) - "a".charCodeAt(0);
    ansArray[charCode] += 1;
    arrObj[string[i]] = ansArray[charCode];
  }

  return arrObj;
};

console.log(countOccurences("hello"));
