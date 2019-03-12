function player(name, health) {
    this.name = name;
    this.health = health;
    this.attack = function attack(opponent) {
        opponent.health -= 10;
    }
}

player.prototype.heal = function heal(self) {
    this.health += 5;
    console.log(this.name + ' + 5 health')
}

const dennis = new player('Dennis', 200);
const eric = new player('Eric', 100);

const fight = (player1, player2) => {
    
    let lastAtk = null;
    let inRow = 0;

    while (player1.health > 0 && player2.health > 0) {
        if (Math.random() * 2 >= 1) {
            player1.attack(player2);
            console.log(player2.name + ' has ' + player2.health + ' health left');
            if (player1 === lastAtk) {
                inRow ++;
                if (inRow % 3 === 0) {
                    player1.heal();
                } 
            } else {
                lastAtk = player1;
                inRow = 1;
            }
        } else {
            player2.attack(player1);
            console.log(player1.name + ' has ' + player1.health + ' health left');
            if (player2 === lastAtk) {
                inRow ++;
                if (inRow % 3 === 0) {
                    player2.heal();

                } 
            } else {
                lastAtk = player2;
                inRow = 1;
            }
        }
    }
    if (player1.health = 0){
        console.log(player2.name + ' is the winner!');
    } else {
        console.log(player1.name + ' is the winner!');
    }
}

fight(dennis, eric)