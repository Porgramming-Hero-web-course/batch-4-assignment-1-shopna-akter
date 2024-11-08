"use strict";
//Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elemconstents.
const numArray = [1, 6, 4, 9, 5, 6, 7, 7];
function removeDuplicates(arr) {
    let refinedArray = [];
    for (const num of arr) {
        if (refinedArray.includes(num) === false) {
            refinedArray.push(num);
        }
    }
    return refinedArray;
}
console.log(removeDuplicates(numArray));
