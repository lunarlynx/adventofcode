'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input9.txt');

let numbers = String(buffer).split('\n').map(el => Number(el));


// 776203571

function isSumm(arr, number) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum === number) {
            //
            let min = Math.min(...arr.slice(0, i + 1));
            let max = Math.max(...arr.slice(0, i + 1));
           return [min, max];
        } else if (sum > number) {
            return undefined;
        }
    }
    return undefined;
}


const toSearch = 776203571;
let length = numbers.length;
for (let i = 0; i < length; i++) {
    let arrTerms = isSumm(numbers, toSearch);

    if (arrTerms !== undefined) {
        console.log(arrTerms);
        console.log(arrTerms[0] + arrTerms[1]);
        break
    } else {
        numbers = numbers.slice(1);
    }
}
