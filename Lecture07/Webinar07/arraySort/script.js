let arr = [1,5,7,14,9,34,19];
// console.log(arr.sort());

// Js by default does a lexicographical order

// insertion sort algo
function compare (a,b) {
    return a - b;      // increasing order
}
function compare (a,b) {
    return b - a;      // decreasing order
}
function compare (a,b) {
    return (a%10) - (b%10);      // unit digit
}
// let sortedArr = arr.sort(compare);
// console.log(sortedArr);

arr.sort(function(a,b) {
    return a - b;
})
console.log(arr);