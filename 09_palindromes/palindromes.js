const palindromes = function (string) {
  const arr = string.toLowerCase().split("").filter(function (char) {
    return "abcdefghijklmnopqrstuvwxyz0123456789".includes(char);
  });
  let revArr = arr.toReversed();
  return arr.join("") === revArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
