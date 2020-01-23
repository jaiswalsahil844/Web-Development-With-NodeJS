let p = 'sahil';
let str = 'this is sumit\'s string';
let str1 = "this is sumit's string";

let str2 = "this is ${p} string";

let str3 = 'this is\n\
a very long\
string';

console.log(str3);

// length
console.log(str2.length);

// serching
let s = 'this is some data here';
let key = 'some';

console.log(s.indexOf(key));
console.log(s.indexOf('is'));
console.log(s.indexOf('is',3));
console.log(s.lastIndexOf('is'));
console.log(s.lastIndexOf('is',4));

// methods
let mainStr = 'this is a long string';
let samllStr = mainStr.slice(2);
console.log(samllStr);
samllStr = mainStr.slice(2,4);
console.log(samllStr);
samllStr = mainStr.slice(-6,-4);
console.log(samllStr);

samllStr = mainStr.substring(2);
console.log(samllStr);
samllStr = mainStr.substring(2,4);
console.log(samllStr);
samllStr = mainStr.substring(-6,-4);  // negative index not allowed in subString
console.log(samllStr);

samllStr = mainStr.substr(2);
console.log(samllStr);
samllStr = mainStr.substr(2,4);
console.log(samllStr);
samllStr = mainStr.substr(-6,4);     
console.log(samllStr);