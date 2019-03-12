class Person {
    constructor(objects){
        this.age = objects.age;
        this.name = objects.name;
    }

    info() {
        console.log(`The person is called ${this.name} and is ${this.age} years old.`)
    }

}

class Student extends Person {
    constructor(options) {
        super(options);
        this.gpa = options.gpa;
    }

    info() {
        console.log(`The person is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${4.0} in the university`)
    }
}

const tom = new Student({age: 44, name: "Tom", gpa: 4.0})
tom.info();

