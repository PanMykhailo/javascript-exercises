const convertToCelsius = function(value) {
  const tempInCelcius = parseFloat(((value - 32) * (5 / 9)).toFixed(1));
  return tempInCelcius;
};

const convertToFahrenheit = function(value) {
  const tempInFahrenheit = parseFloat((value * (9 / 5) + 32).toFixed(1));
  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
