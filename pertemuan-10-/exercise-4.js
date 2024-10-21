//1.Using a for-loop to iterate through the array and console.log all of the people
let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//2.Using forEach() to iterate through the array and console.log all of the people
people.forEach(person => {
    console.log(person);
});

//3.Command to remove "Greg" from the array:
people.shift();
//4. Command to remove "James" from the array:
people.pop();
//5. Command to add "Matt" to the front of the array:
people.unshift("Matt");
//6. Command to add your name to the end of the array:
people.push("Fahrunisa");
//7. Using a for-loop to iterate through the array and exit the loop after logging "Mary":
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

//8. Command to make a copy of the array using slice, excluding "Mary" and "Matt":
let peopleCopy = people.slice();
peopleCopy = peopleCopy.filter(person => person !== "Mary" && person !== "Matt");

//9. Redefine the people variable and use splice to remove "Devon" and add "Elizabeth" and "Artie":
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people.unshift("Matt");  // Add Matt back to the front
people.push("Fajrikun"); // Add your name to the end

//10. Create a new variable called withBob and set it equal to the people array concatenated with the string "Bob":
let withBob = people.concat("Bob");

//11.Final result:
console.log(withBob);
