// var->function scope
var x = 10;

function myFun () {
    var x = 20;
    x += 1;
    console.log(x);
    
    if (true) {
        var x = 30;
        x += 1;
        console.log(x);
    }
    console.log(x);
}
myFun();
console.log(x);

console.log();
// let->block scope
let y = 10;

function myFun1 () {
    let y = 20;
    y += 1;
    console.log(y);
    
    if (true) {
        let y = 30;
        y += 1;
        console.log(y);
    }
    console.log(y);
}
myFun1();
console.log(y)

// const->block scope