// closure scope

function createCounter (initVal,delta) {
    let val = initVal;
    function counter () {
        val = val + delta;
        return val;
    }
    return counter;
}

let fiveConut = createCounter(5,5);
let anotherCounter = createCounter(18,4);

console.log(fiveConut());
console.log(fiveConut());
console.log(fiveConut());

console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());