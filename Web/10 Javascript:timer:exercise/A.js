const timeFrame = (sec) => {

    if (isNaN(sec) || sec < 1 || sec > 60) {
        console.log("Please enter a number between 1 - 60");
    } else {
        setTimeout(() => {
            console.log(`Alarm ringing at ${sec}`);
        }, sec * 1000);
    };
};

timeFrame(1);