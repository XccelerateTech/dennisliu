export const isLeap = (x) => {
    if ((x%4 === 0) && (x%100 !== 0)) {
        return true;
    } else if ((x%100 === 0) && (x%400 === 0)) {
        return true;
    } else {
        return false;
    }
}


/* Method 2
export const isLeap = (x) => {
    if (((x%4 === 0) && (x%100 !== 0)) || (x%400 === 0)) {
        return true;
    } else if ((x%100 === 0) && (x%400 !== 0)) {
        return false;
    } else {
        return false;
    }
}
*/


/* Method 3
export const isLeap = (year) => {
    if (year % 4 !== 0) {
        return false;
    } else {
        if (year % 100 !== 0) {
            return true;
        } else {
            if (year % 400 !== 0) {
                return false;
                if (year % 200 === 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        };
    };
}
*/