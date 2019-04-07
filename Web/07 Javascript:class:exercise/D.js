class Monster {
    constructor(option){
        this.health = 100;
        this.name = option.name;
    };

    wound(){
        while (this.health > 0) {
            this.health -= (Math.floor(Math.random()*16)+5);
            console.log(`${this.name}'s Health: ${this.health}`);
        };
        console.log(`${this.name} dead.`);
    };
};

const elena = new Monster({name: 'Elena'});

const hero = (monster) => {
    monster.wound();
};

hero(elena);
