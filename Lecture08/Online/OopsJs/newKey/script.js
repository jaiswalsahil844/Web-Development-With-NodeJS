function Person(name, age){
    this.name = name;
    this.age = age;
    return 10;
}

// let p = Person("Sahil",23);
// console.log(p);
// console.log(name);
// console.log(age);


let p = new Person("Sahil",23);
console.log("p = " + p);
console.log("p = " + JSON.stringify(p));
console.log(p.name);
console.log(p.age);