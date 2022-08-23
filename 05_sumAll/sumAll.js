const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR';
    
    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR'

    if (a > b) [a, b] = [b, a];

    return (((a + b)/2)*(b - a +1))
};

// Do not edit below this line S = [(a + b)/2].(b - a + 1)
module.exports = sumAll;
