// Main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope)
// while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope)
let a = 20;

function greet () {

    // if (true) {
    //     let a = 10;
    //     console.log(a);
    // }
    // console.log(a);

    if (true) {
        var a = 10;
        console.log(a);
    }
    console.log(a);
}
greet()