/*

Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
 
 */
const temperatures = [32, 35, 28, 40, 38, 30, 42];

const temp_above35 = temperatures.filter((element) => element > 34.9)
const temp_toFarenheit = temperatures.map((element) => (element * 9/5) + 32)
let average_sum = temperatures.reduce((acc, ele) => acc + ele)
average_sum = average_sum / temperatures.length

// const find_above40 = temperatures.find(() => )
console.log(find_above40)


/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

const longCourses = courses.filter(course => course.length > 5);
const upperCourses = courses.map(course => course.toUpperCase());
const findReact = courses.find(course => course === "react");
const indexNode = courses.findIndex(course => course === "node");
console.log(longCourses);
console.log(upperCourses);
console.log(courseString);
console.log(findReact);
console.log(indexNode);
/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/

const marks = [78, 92, 35, 88, 40, 67];

const passMarks = marks.filter(mark => mark >= 40);
const graceMarks = marks.map(mark => mark + 5);
const highestMark = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
const firstBelow40 = marks.find(mark => mark < 40);
const index92 = marks.findIndex(mark => mark === 92);
console.log(passMarks);
console.log(graceMarks);
console.log(highestMark);
console.log(firstBelow40);
console.log(index92);