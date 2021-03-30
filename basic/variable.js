console.log("2 + 3 = " + add1(2, 3)); // “2 + 3 = 5”
console.log("4 + 5 = " + add2(4, 5)); // Uncaught TypeError: add2 is not a function

function add1(a, b) { return a + b; }
var add2 = function (a, b) { return a + b; };

console.log('x', x); // referenceError : x is not defined
var x = 4;
var fn = function () {
    console.log('x', x); // undefined, if remove ‘var x=2’ then x will be 4 !!
    console.log('z', z); // referenceError : z is not defined (block scope)
    console.log('y', y); // 2 (variable hoisting)

    var x = 2;
    let z = 3;
    var y; // (variable declaration)

    y = 2;

    console.log('innerFn', innerFn); // 2 (function declaration hoisting)

    function innerFn() {
        return 2;
    }
};
console.log('fn', fn);
{ let name = 'seo'; }
console.log('name', name); // referenceError : name is not defined
{ var age = 29; }
console.log('age', age); // 29, var은 function level scope