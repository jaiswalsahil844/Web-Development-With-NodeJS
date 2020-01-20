let str = "sahiljaiswal";

console.log(str.indexOf('a'));
console.log(str.indexOf('a',3));
console.log(str.lastIndexOf('a'));
console.log(str.lastIndexOf('a',9));

console.log(str.substr(3));
console.log(str.substr(3,5));

console.log(str.substring(3));
console.log(str.substring(3,5)); 

console.log(str.slice(4,5)); // it is same as substring for +ive number

console.log(str.substring(-5,-3));
console.log(str.slice(-5,-3));

console.log(str.split('a'));
console.log(str.split('a')[1]);