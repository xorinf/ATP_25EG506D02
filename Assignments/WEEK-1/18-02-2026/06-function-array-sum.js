// Q6. Write a function that receives an array as args and return their sum

function calculateArraySum(numbersArray){
    let totalSum = 0;
    for (let index = 0; index < numbersArray.length; index++){
        totalSum = totalSum + numbersArray[index]
    }
    return totalSum
}

console.log(calculateArraySum([10, 20, 30]));
