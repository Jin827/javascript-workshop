var person = "Jiah";
var group = {
    person: "Mia",
    sayHello() {
        console.log('hello, ' + this.person);
    }
};

console.log('group.sayHello()', group.sayHello());   //hello Mia => undefined

var greet = group.sayHello;

console.log('greet()', greet());  //hello Jiah => undefined
greet.bind(this.group);
console.log('greet()', greet());;  //hello Jiah => undefined

/*** functions are variables in JS ***/
var triple = function (x) {
    return x * 3;
};

var waffle = triple;
console.log("waffle(30)", waffle(30)); // 90
