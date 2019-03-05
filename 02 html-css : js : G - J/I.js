var i = 1;

while (i < 31) {
    if ((i % 3 == 0) && (i % 5 != 0)) {
        console.log('Hong');
        i++;
    } else if ((i % 3 != 0) && (i % 5 == 0)) {
        console.log('Kong');
        i++;
    } else if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('Hong Kong');
        i++;
    } else {
        console.log(i);
        i++;
    }
}