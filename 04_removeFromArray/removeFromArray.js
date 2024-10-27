const removeFromArray = function(array, ...badNums) {
  const newArray = [];
  for (let num of array) {
    if (badNums.includes(num)) continue;
    newArray.push(num);
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
