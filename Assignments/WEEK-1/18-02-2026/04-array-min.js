
// 4. find the smallest element in marks array
let studentMarks = [98, 75, 65, 90, 19];

let minimumMark = studentMarks[0];
for (let index = 0; index < studentMarks.length; index++){
    if (studentMarks[index] < minimumMark){
        minimumMark = studentMarks[index]
    }
}
console.log("minimum element is", minimumMark)