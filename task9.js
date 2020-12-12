'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input9.txt');

let numbers = String(buffer).split('\n').map(el => Number(el));

function isSumm(arr, number) {

    for (let i = 0; i < 25; i++) {
        for (let j = i + 1; j < 25; j++) {
            if (arr[i] + arr[j] === number) {
                return true;
            }
        }
    }

    return false;

}

while (numbers.length >= 25) {

    let ourNumber = isSumm(numbers, numbers[25]);

    if (!ourNumber) {
        console.log(numbers[25]);
        break
    } else {
        numbers = numbers.slice(1);
    }
}