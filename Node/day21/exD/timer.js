const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.secCount;
    }

    tick(sec) {

        var a = setInterval(interval, 1000);

        const that = this;
        
        var secCount = sec;

        function interval() {
            if (secCount == 0) {
                clearInterval(a); 
            } 

            that.emit('tick', secCount);
            secCount --;

        };
    };
};

module.exports = Timer;