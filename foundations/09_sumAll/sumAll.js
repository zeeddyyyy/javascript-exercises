const sumAll = function(a, b) {

    if (typeof a !== "number" || typeof b !== "number" || 
      a < 0 || b < 0 || 
      !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  let min = Math.min(a, b); // Trova il più piccolo (es. 1)
  let max = Math.max(a, b); // Trova il più grande (es. 5)
  
  let totale = 0;
  for (let i = min; i <= max; i++) {
    totale += i;
  }
  return totale;
};

// Do not edit below this line
module.exports = sumAll;
