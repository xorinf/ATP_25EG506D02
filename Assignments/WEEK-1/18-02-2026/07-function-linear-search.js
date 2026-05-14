// Q7. Write a function that receives an array & search element as args and returns the index of that search element in the array it
//     should return -1 when search element not found

function linearSearch(numbersArray, searchKey) {
  for (let index = 0; index < numbersArray.length; index++) {
    if (numbersArray[index] == searchKey) {
      return index;
    }
  }
  return -1;
}
let numbersList = [10, 20, 30];
let targetKey = 20;
let searchResult = linearSearch(numbersList, targetKey);

if (searchResult == -1) {
  console.log("Element Not Found");
} else {
  console.log("The element found at index : ", searchResult);
}
