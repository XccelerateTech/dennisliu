const EventEmitter = require('events');

class Player extends EventEmitter {
    constructor(referee) {
        super();
        this.referee = referee;
        
    }

    playerPlay(input) {
        this.referee.emit('playerChoice', input)
    }
}

module.exports = Player;