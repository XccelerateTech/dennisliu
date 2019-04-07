const myArray = [3, 5, 6, 2, 1, 5];

const processArray = (array, callback) => {
    var newArr = [];

    array.forEach(a => {
        newArr.push(callback(a));
    });

    // for (var i = 0; i < array.length; i++){
    //     newArr.push(callback(array[i]));
    // }

    console.log(newArr); 
}

processArray(myArray, function(a) {
    return a + 5;
})