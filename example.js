function calculate(num, callback){
    return callback(num)
}

function double(n){
    return n * 2
}

console.log(calculate(10, double))
