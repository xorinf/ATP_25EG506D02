// 2. find the big number in given 3 numbers
let firstNumber = 10;
let secondNumber = 20;
let thirdNumber = 30;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log(`The first number : ${firstNumber} is bigger than ${secondNumber} and ${thirdNumber}`);
} 
else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log(`The second number : ${secondNumber} is bigger than ${firstNumber} and ${thirdNumber}`);
} 
else {
  console.log(`The third number : ${thirdNumber} is bigger than ${firstNumber} and ${secondNumber}`);
}