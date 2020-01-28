// if(typeof window === 'undefined'){
//     const {add,subtract} = require('./lib');
//     console.log('The sum of 2 and 4 is ' + add(2,4));
//     console.log('The subtract of 4 and 2 is ' + subtract(4,2))
// }
// else {
//     console.log('The sum of 2 and 4 is ' + add(2,4));
//     console.log('The subtract of 4 and 2 is ' + subtract(4,2))
// }

let lib;
if(typeof window === 'undefined'){
    lib = require('./lib');
}
else {
    lib = {add,subtract};
}
console.log(lib);
console.log('The sum of 2 and 4 is ' + lib.add(2,4));
console.log('The subtract of 4 and 2 is ' + lib.subtract(4,2))
