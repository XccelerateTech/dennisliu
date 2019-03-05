const multiplyNumber = number => {
    if (typeof number === "number") {
        for (var i = number; i < 1000000; i *= 10) {
        }
    } else {
        throw new Error('ERROR');
    }
    console.log(i);
}

multiplyNumber(10); 