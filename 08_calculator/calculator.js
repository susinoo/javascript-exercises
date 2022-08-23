const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  let s = 0

  for (let i = 0; i < array.length; i++) {
    s += array[i];
  }
  
  return s
};

const multiply = function(array) {
  let m = 1

  for (let i = 0; i < array.length; i++) {
    m *= array[i];
  }

  return m
};

const power = function(base, power) {
  let p = base
  for (let i = 1; i < power; i++) {
    p *= base
  }

  return p
};

const factorial = function(b) {
  if (b === 0) return 1

  let f = 1

  for (let i = 1; i <= b; i++) {
    f *= i
  }
  return f
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
