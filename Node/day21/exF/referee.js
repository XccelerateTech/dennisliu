const Player = require('./player');
const Computer = require('./computer');

const EventEmitter = require('events');

class Referee extends EventEmitter {
    constructor() {
        super();

        this.on('playerChoice', function(input) {
            this.playerInput = input;
            this.emit('pInput', input)
        })

        this.on('computerChoice', function(input) {
            this.computerInput = input;
            console.log(`computer plays ${input}`)
            this.emit('cInput', this.result());
        })
    }

    start() {
        this.emit('first');
    }

    result() {
        const p = this.playerInput;
        const c = this.computerInput;
        if (p == c) {
            return 'draw';
        }
        if (p == 'rock') {
            if (c == 'paper') {
                return 'c wins'
            } else {
                return 'p wins'
            }
        }

        if (p == 'paper') {
            if (c == 'scissors') {
                return 'c wins'
            } else {
                return 'p wins'
            }
        }

        if (p == 'scissors') {
            if (c == 'rock') {
                return 'c wins'
            } else {
                return 'p wins'
            }
        }
    }
}

const referee = new Referee();
const player = new Player(referee);
const computer = new Computer(referee);

referee.on('first', function() {
    player.playerPlay('rock');
})

referee.on('pInput', function(input) {
    console.log(`player plays ${input}`)
    computer.computerPlay();
})

referee.on('cInput', function(input) {
    console.log(this.result())
})

referee.start();

referee.result();