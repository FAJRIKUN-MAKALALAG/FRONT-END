//JavaScript Loop

//Array Object

let students = [
    {
      id: 1,
      firstName: "John",
      grade: 80,
    },
    {
      id: 2,
      firstName: "Jane",
      grade: 90,
    },
    {
      id: 3,
      firstName: "Bob",
      grade: 100,
    },
  ];
  
  console.log(students);
  
  //1. for - loop
  // for (let i = 0; i < students.length; i++) {
  //   console.log(students[i].firstName);
  // }
  
  //2. while - loop
  // let i = 0;
  // while (i < students.length) {
  //   console.log(students[i].firstName);
  //   i++;
  // }
  
  //3. do - while - loop
  // let i = 0;
  // do {
  //   console.log(students[i].firstName);
  //   i++;
  // } while (i < students.length);
  
  //4. Array built-in method
  //4.a foreach()
  
  // students.forEach(function (item) {
  //   console.log(item.firstName);
  // });
  
  //4.b map()
  // let output = students.map(function (item) {
  //   return item.firstName;
  // });
  // console.log(output);
  
  //4.c filter()
  let output1 = students.filter(function (item) {
    return item.grade >= 90;
  });
  console.log(output1);
  
  //4.d find()
  let output2 = students.find(function (item) {
    return item.grade >= 90;
  });
  console.log(output2);
  
  //4.e findIndex()
  let output3 = students.findIndex(function (item) {
    return item.firstName === "Jane";
  });
  console.log(output3);
  
  //Mini Exercise
  let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    
  ];
  
  //1. Cari index dari negara Indonesia
  let index = countries.findIndex(function (item) {
    return item === "Indonesia";
  });
  console.log(index);
  //2. Dengan menggunakan filter tampilkan semua
  //   negara yang berakhiran "sia"
  let outputCountries = countries.filter(function (item) {
    return item.endsWith("sia");
  });
  console.log(outputCountries);