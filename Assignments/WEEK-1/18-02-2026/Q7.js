// Q7. Write a funtion that recieves an array & search element as args and returns the index of that search element in the array it
//     should return not found when search element not found

function sumArr(an_array, key) {
  let sum = 0;
  for (let index = 0; index < an_array.length; index++) {
    if (an_array[index] == key) {
      return index;
    }
  }
  return -1;
}
lis = [10, 20, 30];
key = 20;
result = sumArr(lis, key);

if (result == -1) {
  console.log("Element Not Found");
} else {
  console.log("The element found at index : ", result);
}
