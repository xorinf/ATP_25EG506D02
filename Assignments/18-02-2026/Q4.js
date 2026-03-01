
// 4. find the smallest element in marks array
let marks = [98, 75, 65, 90, 19];

let min = marks[0];
for (let index = 0; index < marks.length; index++){
    if (marks[index] < min){
        min = marks[index]
    }
}
console.log("minimum element is", min)