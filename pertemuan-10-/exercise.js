let people = [
    {
        name :"Greg",
    },
    {
        name : "Mary",
    },
    {
        name : "Devon",
    },
    {    
        name : "James",
    },
];

//1. for - loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name)
}

//2. forEach()
people.forEach(function(item){
    console.log(item.name);
});

//3. remove "Greg"
const index1 = people.findIndex(people => people.name === "Greg");
// Remove "Greg" 
if (index1 !== -1) {
    people.splice(index1, 1);
}
//console.log(people);

//4. remove "James"
const index2 = people.findIndex(people => people.name === "James");
if (index2 !== -1) {
    people.splice(index2, 1);
}
//console.log(people);

//5. add "Matt"
people.push ({ name : "Matt"});
//console.log(people);

//6. add my name
people.push ({ name : "Fajrikun"});
console.log(people);

//7. Using a for-loop, iterate through this 
//array and after console.log-ing "Mary", exit from the loop. 
//(hint: use break keyword to exit loop)

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
    if (people[i].name === "Mary") {
        break;
    }
}

//8.using slice 

// Remove "Mary"
const indexMary = people.findIndex(person => person.name === "Mary");
if (indexMary !== -1) {
    people.splice(indexMary, 1);
}

// Remove "Matt"
const indexMatt1 = people.findIndex(person => person.name === "Matt");
if (indexMatt1 !== -1) {
    people.splice(indexMatt1, 1);
}

// copy array tanpa "Mary" and "Matt"
const copyArray = people.slice();

console.log(copyArray);


//9.Redefine the people variable with the value you started with.
// Using the splice command, remove "Devon" from the array 
//and add "Elizabeth" and "Artie". Your array should look like this 
//when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].

// Remove "Devon"
const indexDevon = people.findIndex(person => person.name === "Devon");
if (indexDevon !== -1) {
    people.splice(indexDevon, 1);
}

// Add "Elizabeth" and "Artie"
const indexMatt2 = people.findIndex(person => person.name === "Matt");
if (indexMatt2 !== -1) {
    people.splice(indexMatt2 + 1, 0, { name: "Elizabeth" });
    people.splice(indexMatt2 + 2, 0, { name: "Artie" });
}

// Add "Fajrikun"
people.push({ name: "Fajrikun" });

console.log(people.map(person => person.name)); 

//10. Create a new variable called withBob and set it equal to
// the people array concatenated with the string of "Bob".

const bob = { name: "Bob" };

// Concatenate the `people` array with the `bob` object in an array
const withBob = people.concat(bob);

console.log(withBob.map(person => person.name));

