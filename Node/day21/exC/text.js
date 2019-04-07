var numberToLetter = require('./letter');

var randomLetter = '';

const amountOfLetter = (number) => {
    for (var i = 0; i < number; i++) {
        randomLetter += numberToLetter();
    }
    console.log(randomLetter);
    randomLetter = '';
}

amountOfLetter(6);