// Q6. Write a funtion that recives an array as args and return thier sum

function sumArr(an_array){
    let sum = 0;
    for (let index = 0; index < an_array.length; index++){
        sum = sum + an_array[index]
    }
    return sum
}

console.log(sumArr([10, 20, 30]));
