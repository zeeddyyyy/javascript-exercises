const convertToCelsius = function(temp) {
    let ris = (temp - 32) / 1.8;
    return Math.round(ris * 10) / 10;
  
};

const convertToFahrenheit = function(temp) {
  let ris = (temp * 1.8) + 32;
  return Math.round(ris * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
