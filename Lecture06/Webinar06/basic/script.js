let x = 10;

// print in new line
// for (let i=1; i<=x; i++) {
//     console.log(i);
// }

// print in single line
let result = "";
for (let i=1; i<=x; i++) {
    
    result += i + " ";
}
console.log(result);

// syntax

// single line comment
/* multi
line
comment */

// omit or write semicoln if u prefer
var a = 10
var b = 20;

let c = 30;
const d = 40;

c++;
// d++; not possible as d is const
console.log(c);
console.log(d);

// datatypes and avriable

let num = 1;
let str = "this is a string";
let bool = true;

console.log(num);
num = "hello";
console.log(num);

console.log(typeof 10);
console.log(typeof 10.2);
console.log(typeof "sahil");
console.log(typeof 'c');
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [1,2,3]);

// max and min num in js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
 
// equality and typecasting

console.log(1 == "1"); 
console.log(1 === "1");

console.log((1 + "1") == 11);
console.log("11" - 1 == 1);  // false (NaN not a number)

// ** can be typecast to 0, [] can also be typecast to ""
console.log([] == "");
console.log([] == 0);
console.log(0 == "");

// unary operator
console.log("1");  // string "1"
console.log(+"1"); // number 1

// {} LHS->block, RHS->object
console.log({} + []); // 0
console.log([] + {}); // [object Object]

// object convert into string
// [object->obj Object->class]

let o = {};
console.log(o.toString());