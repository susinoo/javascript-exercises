const removeFromArray = function(list, elemToBeRemoved_1, elemToBeRemoved_2, elemToBeRemoved_3, elemToBeRemoved_4) {
    let output = []

    for (let i = 0; i < list.length; i++) {
        if (!(list[i] === elemToBeRemoved_1) && !(list[i] === elemToBeRemoved_2) && !(list[i] === elemToBeRemoved_3) && !(list[i] === elemToBeRemoved_4)) {
            output.push(list[i])
        }
    }
    return output
};

// Do not edit below this line
module.exports = removeFromArray;
