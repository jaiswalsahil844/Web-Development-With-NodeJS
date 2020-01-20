let x = 10;
console.log(x);
console.log(typeof x);

x = "hello";
console.log(x);
console.log(typeof x);

let a = [1,2,3]
console.log(a);
console.log(typeof a);

console.log(Object);

delete a[0];
console.log(a.length);
console.log(a);

let obj1 = {a:10, b:true, c:"hello"};
console.log(obj1);
delete obj1.a;
console.log(obj1);

console.log(1 + "1");
console.log("2" + 2);
console.log(1 + "1" + 1);

console.log(1 === "1");
console.log(1 == "1");
console.log("" === 0);
console.log("" == 0);

console.log(true == 1);
console.log(true == 0);
console.log(true == 2);
console.log(false == 0);
console.log(false == 2);

let b = [1,2,3,4];
console.log(b);

console.log(b.toString());   // "1,2,3,4"

console.log("1" + (1+1) + "1");
console.log("1" + 1 + 1 + "1");

let obj = {a:10, b:true, c:'hello'};
console.log(obj);
console.log(typeof obj);

console.log(JSON.stringify(obj));

let str = JSON.stringify(obj);
console.log(str);
console.log(typeof str);

let obj2 = {};
console.log(typeof obj2);

console.log([] + {});
console.log({} + []);

console.log(+[]);