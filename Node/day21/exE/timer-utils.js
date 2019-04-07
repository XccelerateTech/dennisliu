module.exports = {
    start: function(timer, sec){
        timer.emit('start', sec);
    },
    stop: function(timer){
        timer.emit('stop');
    },
    pause: function(timer){
        timer.emit('pause')
    }
}