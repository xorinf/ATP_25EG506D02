// 2. find the big number in given 3 numbers
let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
  console.log(`The number a : ${a} is bigger than ${b} and ${c}`);
} 
else if (b > a && b > c) {
  console.log(`The number b : ${b} is bigger than ${a} and ${c}`);
} 
else {
  console.log(`The number c : ${c} is bigger than ${a} and ${c}`);
}