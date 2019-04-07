class Swim {  
    swim(){
        return `${this.name} can swim`;
    }
}

class Fly {
    fly(){
        return (`${this.name} can fly`);
    }
}

class Bat extends Fly {
    constructor(option){
        super(option);
        this.name = option.name;
    }
    feed() {
        return `${this.name} can feed milk`;
    }
}

class Bird extends Fly {
    constructor(option){
        super(option);
        this.name = option.name;
    }
    egg() {
        return `${this.name} can lay eggs`;
    }
}

class Fish extends Swim {
    constructor(option){
        super(option);
        this.name = option.name;
    }
    egg() {
        return `${this.name} can lay eggs`;
    }
}

class Whale extends Swim {
    constructor(option){
        super(option);
        this.name = option.name;
    }
    feed() {
        return `${this.name} can feed milk`;
    }
}

const bat = new Bat({name: 'Bat'});
const bird = new Bird({name: 'Bird'});
const fish = new Fish({name: 'Fish'});
const whale = new Whale({name: 'Whale'});

console.log(bat.fly(), bat.feed())
console.log(bird.fly())