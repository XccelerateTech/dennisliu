var letter = ['0', 'b', 'l', 'i', 'e', 't', 'a', 'd', 'n', 'm']

const maya = (number) => {

    if (number > 100 & number < 999999) {
        let container = [];
        container = number.toString().split('');

        let word = [];
        container.forEach((i) => {
            word.push(letter[i])
        })
        console.log(word.join('').toString());

        } else {
        console.log("Invaild Number");
    }
}

maya(1572368);

maya(15728);

