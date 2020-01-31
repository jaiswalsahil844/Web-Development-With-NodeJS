class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, school){
        super(name, age);
        this.school = school;
    }
}

let p = new Person('Sahil Jaiswal',21);
let s = new Student('Sumit Jaiswal',19,'DPS');

console.log(p);
console.log(s);