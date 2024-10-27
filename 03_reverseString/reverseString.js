const reverseString = function (string) {
  let reversedString = "";
  for (let i = -1; i >= string.length * -1; i--) {
    reversedString += string.at(i);
  }
  return reversedString;
};

// console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
