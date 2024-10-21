//rest parameter and spread operator   


//rest parameter

const func1 = (param1,param2,param3) =>{
        console.log(param1,param2,param3);
}
func1("a","b","c");


const func2 = (...params) =>{
    console.log(params);
}
func2("A","B","C");

//


const func3 = (param1,param2,...params) =>{
    console.log(param1,param2);
    console.log(params);
}
func3("A","B","C","D","E","F","G");

//
//Mini exercise 
//dengan menggunakan rest parameter


const exer1 = (...arr) => {
    let hasil = 0;
    arr.forEach((item) => (hasil+= item));
    return hasil;
}
console.log(exer1(1,2,3,4,5));



///Spread Operator

let Numbers = [1,2,3,4,5];
console,log(Numbers);
console.log(...Numbers);



//kapan kita menggunakan spread yaitu saat menduplikasikan Array

//contoh duplikasi array

let Numbers2 = [...Numbers];
console.log(Numbers2);


//ke 2

let arr1 = [1,2,3];
let arr3 = [4,5,6];
let arr2 = [7,8,9];

let Numbers3 = arr1.concat()


//duplikasi object

const john = {
    fullName : "joe",
    age : 30,
};
const john2 = {...john,address :"manado"}

//menggabungkan object

