//IIFE & Callback function
//1. IIFE 
//#1
(function () {
    //code
    console.log("Hello world");
})();

//#2 return function
let output = (function (Fullname) {
    return "Hello " + Fullname;
}) ("Fajrikun");
console.log(output)

//#3 callback function and return value
function sayHello(Callback) {
    let output = Callback("Fajrikun");
    return output;
}

sayHello(function (Fullname){
    return "Hello " + Fullname;
});
console.log(output);

