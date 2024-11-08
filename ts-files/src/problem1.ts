//Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array
const myArr:number[] = [1,2,3,4,5]
function sumArray (arr: number[]){
    let sumResult = 0
    arr.forEach(num => {
        sumResult= sumResult + num
    });
    return sumResult
}
console.log(sumArray(myArr));