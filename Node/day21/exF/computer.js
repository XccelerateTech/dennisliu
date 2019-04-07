const EventEmitter = require('events');

class Computer extends EventEmitter {
    constructor(referee) {
        super();
        this.referee = referee;
        this.choices = ['rock', 'paper', 'scissors'];
        this.number = Math.floor(Math.random() * 3);
        this.input = this.choices[this.number]
    }

    computerPlay() {
        const that = this;
        this.referee.emit('computerChoice', that.input);
    }
}

module.exports = Computer;