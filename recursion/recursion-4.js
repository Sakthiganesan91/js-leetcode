const isPalindrome = (str, i, j) => {
  if (i >= j) return true;
  if (str[i] !== str[j]) {
    return false;
  }
  return isPalindrome(str, i + 1, j - 1);
};

const text = "mapwsam";
console.log(isPalindrome(text, 0, text.length - 1));
