const getTheTitles = function(books) {
    let arr = []

    books.forEach(book => {
        arr.push(book.title)
    });

    return arr
};

// Do not edit below this line
module.exports = getTheTitles;
