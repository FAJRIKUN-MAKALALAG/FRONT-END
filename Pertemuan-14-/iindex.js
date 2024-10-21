// TUGAS #7 
//DESTRUCTURING.

// Pelajari konsep destructuring dan buat contoh:
// - Destructuring (Array & Object)
// - Destructuring dengan mengambil sebagian item (Array & Object)
// - Destructuring dengan menggunakan default value (Array & Object)
// - Destructuring dengan menggunakan rest operator (Array & Object)



// 1. 

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

function yearUntilRetirement({ year, firstName }) {
    var age = calculateAge(year);
    var retirement = 60 - age;
  
    if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
      console.log(firstName + ' is already retired.');
    }
  }
  
  yearUntilRetirement({ year: 1987, firstName: 'John' });
  

// 2.

const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 3. 

var phi = 3.14;

var calculateArea = function ({ radius, power }) {
  return phi * Math.pow(radius, power);
};

var area21 = calculateArea({ radius: 21, power: 2 });
var area7 = calculateArea({ radius: 7, power: 2 });

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);


// 4.

const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest('www.google.com');
