function Person (name,age) {
   this.firstName = name.split(" ")[0];
   this.lastName = name.split(" ")[1];
// this is public
// this.age = age;
// now 'age' is like a  private variable
   this.isAdult = function () {return age > 18};

// let mAge = age; now 'mAge' is private variable
// this.isAdult = function () {return mAge > 18};
}

let p = new Person("Sahil Jaiswal",21);
let q = new Person("Sumit Jaiswal",17);
console.log(p);
console.log(q);

console.log(p.isAdult());
console.log(q.isAdult());