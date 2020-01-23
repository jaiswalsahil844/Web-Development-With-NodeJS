let arr = [1,2,3];
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
console.log(typeof arr);

let arr2 = [1, "hello", false, [2,3]];
console.log(arr2);
console.log(typeof arr2[1]);

for (let i=0; i<arr2.length; i++) {
    console.log(arr2[i]);
}

for (let index in arr2) {
    console.log(arr2[index]);
}

for(let val of arr2) {
    console.log(val);
}

let fruits = ['apple', 'mango'];

// push and pop
fruits.push('melon','kiwi');
console.log(fruits);
fruits.pop();
console.log(fruits);

// shift and unshift from front
fruits.shift();
console.log(fruits);

fruits.unshift('kiwi','orange');
console.log(fruits);

// data cahnging

// slice
let notes = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do'];
console.log(notes.slice(4));
console.log(notes.slice(4,6));
console.log(notes);

// splice // actual affect array 
// console.log(notes.splice(4));  
// console.log(notes.splice(4,2));
// console.log(notes);

notes.splice(0,3,'sa', 're', 'ga');
console.log(notes);

// concat

console.log(notes.concat('sa', 'ga', 're'));
console.log(notes);