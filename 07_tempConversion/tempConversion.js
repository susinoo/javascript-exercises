const ftoc = function(temperature) {
  let c_temp = (temperature - 32) * 5/9
  return Math.round(c_temp * 10) / 10
};

const ctof = function(temperature) {
  let f_temp = (temperature * (9/5)) + 32
  return Math.round(f_temp * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
