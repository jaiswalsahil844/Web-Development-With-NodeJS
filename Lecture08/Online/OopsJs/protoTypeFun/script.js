function Person(name,age){

    this.name = name;
    this.age = age;
    // this.isAdult = function () { return this.age >= 18}
}
Person.prototype.isAdult = function () { return this.age >= 18}
Person.prototype.city = 'Delhi';
let p = new Person('Sahil Jaiswal',21);
let p2 = new Person('Sumit',17);

console.log(p.isAdult());
console.log(p2.isAdult());
console.log(p.isAdult == p2.isAdult);