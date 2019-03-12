function Person(name, age) {
    this.name = name;
    this.age = age;
}   

const dennis = new Person('Dennis', 25);

dennis.height = 177;
console.log(dennis.name);
console.log(dennis.age)
console.log(dennis.height)

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.height = 177;

// const dennis = new Person('Dennis', 25);

// console.log(dennis.name)
// console.log(dennis.age)
// console.log(dennis.height)