let arr = [1,2,3];
console.log(arr);

let arr2 = [1,2,3,'asd',true,false,{a:10,b:'hello'},[3,4,5]];
console.log(arr2);
console.log(arr2[4]);

let twodarr = [[1,2],[3,4],[5,6]];
console.log(twodarr);
console.log(twodarr[2][1]);

console.log(arr.join('-'));

let arr1 = [1,2,3,4,5,6,7,8,9];
console.log(arr1.slice(4,5));
console.log(arr1);

console.log(arr1.splice(4,5)); // it is change actually value of array
console.log(arr1);

console.log(arr1[5]);
arr1[4] = 10;
console.log(arr1);

arr1[15] = 15;
console.log(arr1);
console.log(arr1.length);

arr1[10] = 13;
console.log(arr1);
console.log(arr1[8]);