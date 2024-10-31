const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce(add, 0);
};

const multiply = function(nums) {
  return nums.reduce(function (x, y) {
    return x * y;
  });
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num <= 1) return 1;
  
  let sum = num;
	while (num > 1) {
    sum *= --num;
  }

  return sum;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
