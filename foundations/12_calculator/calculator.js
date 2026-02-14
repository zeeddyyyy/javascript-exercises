const add = function(num1, num2) {
	return num1+ num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc,currentValue) => acc + currentValue,0);
}; 

const multiply = function(arr) {
  return arr.reduce((acc,currentValue) => acc * currentValue,1);
};

const power = function(base,exponent) {
  let num = 1;
  for(let i = 0; i < exponent; i++){
    num = num * base ;
  }
  return num;
};

const factorial = function(num) {
	if(num === 0) return 1;
  let result = num;
  for(let i = 1; i < num; i++){
    result *= i;
  }
  return result;
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
