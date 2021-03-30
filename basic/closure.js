for (let i = 0; i < 4; i++) {
    setTimeout(
        (function (x) {
            return function () {
                console.log(`i=${i}, x=${x}`);
            };
        })(i), i * 100);
}

var x = 10;
function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}
function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}
var f1 = createFunction1();
console.log('f1', f1()); // 10
var f2 = createFunction2();
console.log('f2', f2()); // 20



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