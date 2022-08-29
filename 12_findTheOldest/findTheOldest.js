const findTheOldest = function(array) {
    let age = 0
    let maxAge = 0
    let thisYear = new Date().getFullYear();
    let oldest = ""

    array.forEach(element => {
        if ('yearOfDeath' in element) {
            age = element.yearOfDeath - element.yearOfBirth
        }
        else {
            age = thisYear - element.yearOfBirth
        }
        if (age > maxAge) {
            maxAge = age
            oldest = element
        }
    });
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
