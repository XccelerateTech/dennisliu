const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.count = 0;
        this.second = 0;
        this.a;

        this.on('start', function(sec) {

            if (sec != undefined) {
                this.second = sec
            }

            this.a = setInterval(interval, 1000);

            const that = this;

            function interval() {
                var remaining = that.second - that.count;
                if (remaining == 0) {
                    clearInterval(that.a); 
                } 
                that.emit('tick', remaining);
                that.count++;
            };
        })

        this.on('pause', function(){
            clearInterval(this.a);
        })

        this.on('stop', function(){
            clearInterval(this.a);
            this.count = 0;
            this.second = 0;
        })

    }
}
module.exports = Timer;