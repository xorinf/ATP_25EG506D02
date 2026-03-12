/*
Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// #1
const inStock = cart.filter((cartObj) => {
    if (cartObj.inStock){
        return true
    }
})
console.log("(list of items which are in stock) : ", inStock)
// #2
const new_arr = cart.map((cartObj) => [cartObj.name, cartObj.price])
console.log("New array : ", new_arr)
// #3
const grand_total = cart.reduce((acc, cartObj) => acc + cartObj.price, 0)
console.log("The total price : ", grand_total)
// #4
const mouse_details = cart.find((cartObj) => cartObj.name === "Mouse")
console.log("Details of mouse : ", mouse_details)
// #5
const indexOfKeyboard = cart.findIndex((cartObj) => cartObj.name === "Keyboard")
console.log("Index of Keyboard : ", indexOfKeyboard)


/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"

*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
// 1
const peps_pass = students.filter((stdObj) => stdObj.marks >= 40)
console.log("Student who passed : \n", peps_pass)
// 2
const new_wh = students.map((stdObj) => {
    if (stdObj.marks >= 90){
        stdObj.grade = 'A'
        return stdObj
    }
    else if (stdObj.marks >= 75){
        stdObj.grade = 'B'
        return stdObj
    }
    else if (stdObj.marks >= 60){
        stdObj.grade = 'C'
        return stdObj
    }
    else {
        stdObj.grade = 'D'
        return stdObj
    }
}) 
console.log("Added Grade : ", new_wh)

// 3
let avg_std = students.reduce((acc, ele) => acc + ele.marks, 0)
avg_std = avg_std / 2
console.log("average marks of students : ", avg_std)

// 4

const nameOfstud = students.find((studObj) => studObj.marks === 92)
console.log("Name of the student is :", nameOfstud.name)

/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"

*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

const itEmployees = employees.filter(e => e.department === "IT");

const employeesWithBonus = employees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.1
}));

const totalPayout = employees.reduce(
  (acc, e) => acc + e.salary,
  0
);

const salary30000 = employees.find(e => e.salary === 30000);

const indexOfNeha = employees.findIndex(e => e.name === "Neha");

console.log(itEmployees);
console.log(employeesWithBonus);
console.log(totalPayout);
console.log(salary30000);
console.log(indexOfNeha);

/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");

const movieTitles = movies.map(
  m => `${m.title} (${m.rating})`
);

const averageRating =
  movies.reduce((acc, m) => acc + m.rating, 0) / movies.length;

const jokerMovie = movies.find(m => m.title === "Joker");

const indexOfAvengers = movies.findIndex(
  m => m.title === "Avengers"
);

console.log(sciFiMovies);
console.log(movieTitles);
console.log(averageRating);
console.log(jokerMovie);
console.log(indexOfAvengers);
/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const creditTransactions = transactions.filter(
  t => t.type === "credit"
);

const transactionAmounts = transactions.map(
  t => t.amount
);

const finalBalance = transactions.reduce(
  (acc, t) => t.type === "credit"
    ? acc + t.amount
    : acc - t.amount,
  0
);

const firstDebit = transactions.find(
  t => t.type === "debit"
);

const indexOf10000 = transactions.findIndex(
  t => t.amount === 10000
);

console.log(creditTransactions);
console.log(transactionAmounts);
console.log(finalBalance);
console.log(firstDebit);
console.log(indexOf10000);