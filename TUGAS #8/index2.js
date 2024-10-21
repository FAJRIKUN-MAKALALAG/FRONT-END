import { yearUntilRetirement, addNumber, calculateArea, makeAjaxRequest } from './mod.js';

// 1. 
yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. 
console.log(addNumber(1, 2, 3, 4, 5, 6, 7)); //

// 3.
const area21 = calculateArea({ radius: 21, power: 2 });
const area7 = calculateArea({ radius: 7, power: 2 });
console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
makeAjaxRequest('www.google.com');
