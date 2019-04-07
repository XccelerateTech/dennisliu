var randomNumber = require('./number.js');

var letter = 'abcdefghijklmnopqrstuvwxyz';

var numberToLetter = () => {
    let a = letter[randomNumber()];
    return a;
}

module.exports = numberToLetter;