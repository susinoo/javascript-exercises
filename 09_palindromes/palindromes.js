const palindromes = function (word) {
    let reversed_word = ""
    word = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '');

    for (let i = word.length - 1; i >= 0; i--) {
        reversed_word += word[i]
    }

    word = word.split('')
    reversed_word = reversed_word.split('')

    for (let i = 0; i < word.length; i++) {
        if (word[i] != reversed_word[i]){
            return false
        }
    }
    return true
};

console.log(palindromes('Animal loots foliated detail of stool lamina'))
// Do not edit below this line
module.exports = palindromes;
