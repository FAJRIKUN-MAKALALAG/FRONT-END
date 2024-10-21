//Asynchronous JS

//Synchronous -> singgle thread -> blocking (hanya ada 1 proses yang berjalan)

// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yg memakan waktu yang lama"); //->blocking atau proses akan terhenti dibagian sini/proses selanjutnya belum akan dijalankan
// console.log("Proses 4");

//Asynchronous _> ulti thread

//1.Parallel

// setTimeout(() => {
//     console.log("proses 1");
// },5000);
// console.log("proses 2");
// setTimeout(() => {
//     console.log("proses 3");
// },3000);
// console.log("proses 4");

//2.Concurrent

// setTimeout(() => {
//     console.log("proses 1");
//     setTimeout(() => {
//         console.log("proses 2");
//         setTimeout(() => {
//             console.log("proses 3");
//             setTimeout(() => {
//                 console.log("proses 4");
//             },3000)
//         },3000)
//     },3000);
// },3000);
// system callback hell >

// Promise - 
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//     if(condition){
//         resolve("Berhasil");
//     }else{
//         reject("Gagal")
//     }
// });


// Cara Pakai Promise

//1. then - cat

// newPromise
// .then((result) => {
//     console.log(result);
// })
// .then((result2) => {
//     console.log(result2);
// })
// .catch((eror) => console.log(eror));

//2. Async - Await => selalu digunakan pada fungsi

// const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     }catch (eror){
//         console.log(eror);
//     }
// };

// consumePromise();

// menggunakan promise yang sudah ada

// menggunakan fetch
// menggunakan axios 
