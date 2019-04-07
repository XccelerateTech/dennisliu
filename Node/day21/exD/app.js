const Timer = require('./timer');

var timer = new Timer();

timer.on('tick', function(secCount) {

    if (secCount == 0) {
        console.log('kaboom');
    } else {
        console.log('second:' + secCount);
    };
});

timer.tick(3);