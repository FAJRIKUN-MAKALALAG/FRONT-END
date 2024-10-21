//1. promise
// function helloWorld() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World!");
//         }, 2000); 
//     });
// }
// Async function messages
// async function messages() {
//     const msg = await helloWorld(); 
//     console.log(msg); 
// }
// messages();

//2.fetch

// function ambilDataUser() {
//     fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then((users) => users.data.forEach (user => console.log(user.email))); 
            
        
// }

// ambilDataUser();

//3.async await
// async function ambilDataUser() {
//     try {
//         const response = await fetch("https://reqres.in/api/users"); 
//         const users = await response.json();
//         users.data.forEach(user => {
//             console.log(user.email); 
//         });
    // } catch (error) {
    //     console.error("Error fetching data:", error);
    // }
// }

// ambilDataUser();


//4.

// async function ambilDataUser() {
//     try {
//         const response = await axios.get("https://reqres.in/api/users");
//         const users = response.data;
//         users.data.forEach(user => {console.log(user.email);
//         });  
// }   catch (error) {
//         console.log(error);
// }
// }

// ambilDataUser();


