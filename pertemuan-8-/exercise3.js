let nama = prompt("Masukkan nama:");
let berat = parseFloat(prompt("Masukkan berat badan (kg):"));
let tinggi = parseFloat(prompt("Masukkan tinggi badan (cm):"));

let person = {
    Nama: nama,
    berat: berat,
    tinggi: tinggi,
    calculateBMi: function () {
        let tinggiKeMeter = this.tinggi / 100;
        let bmi = this.berat / (tinggiKeMeter * tinggiKeMeter);
        this.BMI = bmi;
        return bmi;
    },

    getBMIcategory: function () {
        let bmi = this.calculateBMi();
        if (bmi < 16.0) {
            return "Severely UnderWeight";
        } else if (bmi >= 16.0 && bmi <= 18.4) {
            return "UnderWeight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            return "OverWeight";
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            return "Moderately Obese";
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            return "Severely Obese";
        } else {
            return "Morbidly Obese";
        }
    }
};

console.log("Nama:", person.Nama);
console.log("BMI:", person.calculateBMi());
console.log("Kategori BMI:", person.getBMIcategory());
