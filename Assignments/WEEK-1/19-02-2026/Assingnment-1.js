const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




// 1. Insert new Emp at 2nd position

console.log(employees)
count = employees.splice(2, 0, { eno: 102.5, name: 'Ravioli', marks: [ 67, 32, 93 ] });
console.log(count, "-->", employees);

// 2. Remove an emp with name "Kiran"

console.log("\n\n\n");
count = employees.splice(4, 1);
console.log(count, "-->", employees);
console.log(`removed ${count} --> ${employees}`);




// index = function(employees){
//     for (let x in employees){
//         if (employees[x].name == "Sneha"){
//             return x
//         }
//     }

// }
// 3.Change the last mark 95 to 75 of emp  "Sneha"
count = employees[3].marks.splice(2, 1, 75);
console.log(count, "-->", employees);