const checkPalindrome = (string) => {
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string[i].toLowerCase() !== string[j].toLowerCase()) return false;
    i++;
    j--;
  }
  return true;
};

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("Yes"));
