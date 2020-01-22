class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name,age,grade) {
        super(name, age);
        this.grade = grade;
    }
}

let p = new Person('Sahil',21);
let s = new Student('Sumit',12,6);
