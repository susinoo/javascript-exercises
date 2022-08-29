const caesar = function(str, n) {
    let encripted = ""
    let code = 0
    let new_code = 0
    
    const upperStart = 65
    const upperEnd = 90
    const lowerStart = 97
    const lowerEnd = 122

    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            // it's upper case letter 
            if ( n > 0 ) {
                // n positive integer
                if (code + n > 90) {
                    new_code = (((code + n) - upperEnd) + upperStart) -1
                }
                else {
                    new_code = code + n
                }
            }
            else {
                // n negative integer
                if ( code + n < 65) {
                    new_code = (upperEnd - (upperStart - (code + n))) + 1
                }
                else {
                    new_code = code + n
                }
            }
        }
        else if (code >= lowerStart && code <= lowerEnd) {
            // it's lower case letter
            
            if ( n > 0) {
                // n positive integer
                if (code + n > 122) {
                    new_code = (((code + n) - lowerEnd) + lowerStart) -1
                }
                else {
                    new_code = code + n
                }
            }
            else {
                // n negative integer
                if (code + n < 97) {
                    new_code = (lowerEnd - (lowerStart - (code + n))) + 1 
                }
                else {
                    new_code = code + n
                }
            }
        }
        else {
            // it's a punctuation
            new_code = code 
        }
        encripted += String.fromCharCode(new_code)
    }

    return encripted
};

// Do not edit below this line
module.exports = caesar;
