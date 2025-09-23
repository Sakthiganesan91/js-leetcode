/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  const sArray = s.split("");

  sArray.forEach((char, index) => {
    if (!isNaN(char)) {
      sArray[index] = String.fromCharCode(
        s[index - 1].charCodeAt(0) + parseInt(char)
      );
    }
  });
  return sArray.join("");
};
