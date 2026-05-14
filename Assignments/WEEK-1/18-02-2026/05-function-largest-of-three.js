// Q5. Write a function that receives 3 number args and returns the biggest number

function findLargestOfThree(firstNumber, secondNumber, thirdNumber) {
  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    return firstNumber;
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
}

console.log("Big element is :", findLargestOfThree(10, 20, 30));
