// 1. 
export const calculateAge = birthYear => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

// 2. 
export const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return `The numbers of sum is ${sum}`;
};

// 3. 
const phi = 3.14;

export const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// 4. 
export const makeAjaxRequest = (url, method = 'GET') => {
    console.log(`URL: ${url}, Method: ${method}`);
};
