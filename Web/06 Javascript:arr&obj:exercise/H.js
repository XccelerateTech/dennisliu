var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

const move = (word) => {
    var letter = word.split('');
    console.log(letter)
    var newWord = letter.map(i => {
        i = letterArray.indexOf(i) + 10;
        if (i <= 26) {
            return letterArray[i];
        } else {
            return letterArray[i - 26];
        }
    })

    console.log(newWord.join(''));
}


move('dog');

