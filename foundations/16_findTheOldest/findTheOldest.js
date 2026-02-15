const findTheOldest = function(arr) {
  const sorted = arr.map(person => {
    
    const death = person.yearOfDeath || new Date().getFullYear();
    const birth = person.yearOfBirth;
    
    return {
      name: person.name,
      age: death - birth
    };
  }).sort((a, b) => b.age - a.age); 

  return sorted[0];
};



// Do not edit below this line
module.exports = findTheOldest;
