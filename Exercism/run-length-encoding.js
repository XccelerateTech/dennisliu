export const encode = (string) => {

    var count = 1;
    var newString = '';

    for (var i = 0; i <= string.length; i++) {

        if (string.charAt(i) === string.charAt(i+1)) {
            count ++;

        } else {

            if (count == 1) {
                newString += string.charAt(i);

            } else {
                newString += count;
                newString += string.charAt(i);

            }
            count = 1;
        }
    }
    return newString;
}


export const decode = (string) => {

    var newString = '';
    var num = 0

    for (var i = 0; i <= string.length; i++) {

        if (typeof string.charAt(i) === 'number') {
            
            num += Number(string.charAt(i));
            
            while (typeof string.charAt(i+1) === 'number') {
                num *= 10;
                num +=  Number(string.charAt(i+1));
                i++;
            }

            newString += string.charAt(i) * num;

        } else {
            
                newString += string.charAt(i);

        }
    }
}