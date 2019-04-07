var start = require('./timer-utils').start;
var stop = require('./timer-utils').stop;
var pause = require('./timer-utils').pause;

const Timer = require('./timer');

var timer = new Timer();

timer.on('tick', function(remaining) {

    if (remaining == 0) {
        console.log('kaboom');
    } else {
        console.log('second:' + remaining);
    };
});


start(timer, 5);

setTimeout(()=> pause(timer), 1000);
setTimeout(()=> start(timer), 2000);
setTimeout(() => stop(timer), 8000);