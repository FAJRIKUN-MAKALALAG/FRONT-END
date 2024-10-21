
//1. IIFE
(function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    console.log(bmi);
})(85, 1.77);


//2. Callback Function
let bm = (function(berat, tinggi, callback) {
    return callback(berat / (tinggi * tinggi));
})(85, 1.77, function(output) {
    console.log(output);
});


