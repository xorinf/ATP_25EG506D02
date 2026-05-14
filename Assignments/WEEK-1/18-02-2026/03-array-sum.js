// 3. find the sum of marks in (98, 75, 65, 98)
let studentMarks = [98, 75, 65, 90, 19];

let totalSum = 0;
for (let index = 0; index < studentMarks.length; index++){
    totalSum = totalSum + studentMarks[index]
}
console.log("sum of all the elements is ", totalSum)