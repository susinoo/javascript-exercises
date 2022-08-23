const repeatString = function(str, n) {
    if (n < 0) return 'ERROR'

    let output = ''   
    for (let index = 0; index < n; index++) {
        output += str
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
