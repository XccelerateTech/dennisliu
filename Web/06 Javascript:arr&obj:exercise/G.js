const middle = (array) => {
    var max = array.indexOf(Math.max(...array));
    var min = array.indexOf(Math.min(...array));
    console.log(3 - max - min);
}


middle([2,3,1]);


middle([88, 7, 55]);

