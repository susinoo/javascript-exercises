const reverseString = function(str) {
    let str_array = Array.from(str)
    let output = ''
    for (let i = (str.length -1); i >= 0; i--) {
        output += str_array[i]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
