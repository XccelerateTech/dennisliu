class Person {
    constructor(objects){
        this.age = objects.age;
        this.name = objects.name;
    }

    info() {
        console.log(`The person is called ${this.name} and is ${this.age} years old.`)
    }

}
const person = new Person({age: 44, name: 'Tom'});

person.info();