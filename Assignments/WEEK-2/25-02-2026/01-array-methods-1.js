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

const temperaturesAbove35 = temperatures.filter((temperature) => temperature > 35);
const temperaturesInFahrenheit = temperatures.map((temperature) => (temperature * 9/5) + 32);
const totalTemperatureSum = temperatures.reduce((sum, temperature) => sum + temperature, 0);
const averageTemperature = totalTemperatureSum / temperatures.length;
const firstTempAbove40 = temperatures.find((temperature) => temperature > 40);
const indexOfTemp28 = temperatures.findIndex((temperature) => temperature === 28);

console.log(temperaturesAbove35);
console.log(temperaturesInFahrenheit);
console.log(averageTemperature);
console.log(firstTempAbove40);
console.log(indexOfTemp28);


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
const upperCaseCourses = courses.map(course => course.toUpperCase());
const combinedCoursesString = upperCaseCourses.reduce((resultString, course) => resultString ? resultString + " | " + course : course, "");
const reactCourse = courses.find(course => course === "react");
const nodeCourseIndex = courses.findIndex(course => course === "node");

console.log(longCourses);
console.log(upperCaseCourses);
console.log(combinedCoursesString);
console.log(reactCourse);
console.log(nodeCourseIndex);
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

const passedStudentsMarks = marks.filter(mark => mark >= 40);
const marksWithGrace = marks.map(mark => mark + 5);
const maximumMark = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
const firstFailingMark = marks.find(mark => mark < 40);
const indexOf92Mark = marks.findIndex(mark => mark === 92);

console.log(passedStudentsMarks);
console.log(marksWithGrace);
console.log(maximumMark);
console.log(firstFailingMark);
console.log(indexOf92Mark);