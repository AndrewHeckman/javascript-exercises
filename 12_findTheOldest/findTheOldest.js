const findTheOldest = function (people) {
  let oldest;
  let maxAge = 0;
  const date = new Date().getFullYear();
  for (const person of people) {
    if (person.yearOfDeath === undefined) {
      if (date - person.yearOfBirth > maxAge) {
        maxAge = date - person.yearOfBirth;
        oldest = person;
      }
    }
    if (person.yearOfDeath - person.yearOfBirth > maxAge) {
      maxAge = person.yearOfDeath - person.yearOfBirth;
      oldest = person;
    }
  }
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
