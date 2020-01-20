// let obj = {
//     a: 10,
//     b: "hello",
//     c: true
// }
let obj = {
    a: 10,
    b: "hello",
    c: true,
    d: {
        p: 10,
        q: false,
        r: {
            x: "value"
        }
    }
}
console.log(obj.d.r.x);

obj.l = 1234; // new properties added to object
console.log(obj.l);

delete obj.a; // removes properties
console.log(obj.a);

