const countChar = (word, letter) => {
    var arr = [];
    arr = word.toUpperCase().split('');
    var obj = {};
    arr.forEach((n) => { 
        obj[n] = (obj[n] || 0)+1
    });
    console.log(obj[letter.toUpperCase()]);
}



countChar("fizzbuzz","z");
countChar("Fancy fifth fly aloof","f");  