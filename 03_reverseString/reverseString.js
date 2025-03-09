// split the text
// create for-loop for reverse text
const reverseString = function(word) {
    let string = ""
    let words = word.split("");
    for (let index = words.length - 1; index > -1 ; index--) {
        string += words[index];
    }
    return string;

};

// Do not edit below this line
module.exports = reverseString;
