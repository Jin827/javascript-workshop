console.log("2 + 3 = " + add1(2, 3)); // “2 + 3 = 5”
// console.log("4 + 5 = " + add2(4, 5)); // Uncaught TypeError: add2 is not a function
function add1(a, b) { return a + b; }
var add2 = function (a, b) { return a + b; };


let x; // 이는 let x = undefined; 와 같다.
// const 키워드는 반드시 선언과 동시에 값을 할당해야 한다.
const x; // Uncaught SyntaxError: Missing initializer in const declaration;

console.log('x', x); // undefined
var x = 'outer scope';

(function () {
    // 스코프 안에서 선언된 변수는 항상 최상위에 선언한 것과 동등한 의미를 가진다.
    console.log(x); // undefined
    var x = 'inner scope';
}());

// 위의 코드는 아래와 같은 의미를 지닌다.
var x = 'outer scope';
(function () {
    var x;
    console.log(x); // undefined
    x = 'inner scope';
}());
console.log('x', x); // outer scope

if (true) {
    var x = 'if condition scope';
}
console.log('x', x); // if condition scope


(function outerFn() {
    // console.log('z', z); // referenceError : z is not defined (block scope)
    let z = 3;

    console.log('y', y); // referenceError : y is not defined 
    var y; // y 선언
    console.log('y', y); // undefined
    y = 2; // y 할당
    console.log('y', y); // 2

    console.log('innerFn', innerFn()); // 2 (function declaration hoisting)
    function innerFn() {
        return 2;
    }
})();



{ var age = 29; }
console.log('age', age); // 29, var은 function level scope

{ let name = 'seo'; }
console.log('name', name); // referenceError : name is not defined

const c = 'hihi';
{
    const c = 'yahoo';
    console.log('c', c); // yahoo
}
console.log('c', c); // hihi


