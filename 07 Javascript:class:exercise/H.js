class All {
    constructor(options) {
        this.name = options.name;
    }
    swim() {
        return `${this.name} can swim`
    }
    fly() {
        return `${this.name} can fly`
    }
    egg() {
        return `${this.name} can lay egg`
    }
    feed() {
        return `${this.name} can feed milk`
    }
}

class Bat {
    constructor(options) {
        this.animal = new All(options);
    }
    fly() {
        return this.animal.fly();
    }
    feed() {
        return this.animal.feed();
    }
}

class Fish {
    constructor(options) {
        this.animal = new All(options);
    }
    egg() {
        return this.animal.egg();
    }
    swim() {
        return this.animal.swim();
    }
}

class Whale {
    constructor(options) {
        this.animal = new All(options);
    }
    feed() {
        return this.animal.feed();
    }
    swim() {
        return this.animal.swim();
    }
}

class Bird {
    constructor(options) {
        this.animal = new All(options);
    }
    egg() {
        return this.animal.egg();
    }
    fly() {
        return this.animal.fly();
    }
}

const bat = new Bat({name: 'Bat'});
const bird = new Bird({name: 'Bird'});
const fish = new Fish({name: 'Fish'});
const whale = new Whale({name: 'Whale'});

console.log(bat.fly(), bat.feed())
console.log(bird.fly())