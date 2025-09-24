/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let ansStr = "";
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      const smallLetter = String.fromCharCode(charCode + 32);
      ansStr += smallLetter;
      continue;
    }
    ansStr += s[i];
  }
  return ansStr;
};
