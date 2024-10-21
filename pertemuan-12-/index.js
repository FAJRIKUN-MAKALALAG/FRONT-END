//string literal
let nama = "Fajrikun";
let umur = 20;
let alamat = "Manado"

let kalimat = "Hallo nama saya " + nama + ", Umur saya " + umur + " tahun. Dan saya tinggal di " + alamat;
console.log(kalimat);

let kalimat2 = `Hallo nama saya ${nama}, Umur saya ${umur} tahun. dan saya tinggal di ${alamat}`
console.log(kalimat2);


//Arrow Function

function ucapkanSalam(nama) {
    return `Hallo Nama saya ${nama}`;
};
console.log(ucapkanSalam("Bubu"));


const ucapkanSalam2 = (nama) => `Hallo Nama Saya ${nama}`;

console.log(ucapkanSalam2("Bubu"));

//Arrow Function pada IIFE
const greeting = (nama) => `Hi ${nama}`;

console.log(greeting('Fajrikun'));

//Arrow function pada callback



//Default Parameter

const greeting2 = (nama) =>{
    if (nama === undefined){
        nama = "Fajrikun";
    }
    if (age === undefined){
        age = "20";
    }
    if (address === undefined){
        address = "Manado";
    }
    console.log(
        `Hallo Nama saya ${nama}, umur saya ${age}, dan saya tinggal di ${address}`
    );
    
};