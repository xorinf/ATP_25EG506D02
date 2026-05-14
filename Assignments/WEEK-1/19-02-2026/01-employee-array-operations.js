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




// 1. Insert new Employee at 2nd position

console.log(employees)
let removedElements = employees.splice(2, 0, { eno: 102.5, name: 'Ravioli', marks: [ 67, 32, 93 ] });
console.log(removedElements, "-->", employees);

// 2. Remove an employee with name "Kiran"

console.log("\n\n\n");
removedElements = employees.splice(4, 1);
console.log(removedElements, "-->", employees);
console.log(`removed ${removedElements} --> ${employees}`);




// let findEmployeeIndex = function(employees){
//     for (let index in employees){
//         if (employees[index].name == "Sneha"){
//             return index
//         }
//     }

// }
// 3.Change the last mark 95 to 75 of employee "Sneha"
removedElements = employees[3].marks.splice(2, 1, 75);
console.log(removedElements, "-->", employees);