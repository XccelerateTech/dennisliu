function player(name, health) {
    this.name = name;
    this.health = health;
    this.attack = function attack(opponent) {
        opponent.health -= 10;
    }
}


const dennis = new player('Dennis', 200);
const eric = new player('Eric', 100);

const fight = (player1, player2) => {
    
    while (player1.health > 0 && player2.health > 0) {
        if (Math.random() * 2 >= 1) {
            player1.attack(player2);
            console.log(player2.name + ' has ' + player2.health + ' health left');
        } else {
            player2.attack(player1);
            console.log(player1.name + ' has ' + player1.health + ' health left');
        }
    }
    if (player1.health = 0){
        console.log(player2.name + ' is the winner!');
    } else {
        console.log(player1.name + ' is the winner!');
    }
}

fight(dennis, eric)
