'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input15.txt');
let arrNumbers = String(buffer).split(',').map(el => Number(el));

function findPreviousIndex(arr, i) {
    for (let j = arr.length - 2; j >= 0; j--) {
        if (arr[j] === arr[i-1]) {
            return j;
        }
    }

    return -1;
}

for (let i = arrNumbers.length; i < 2020; i++) {
    let oldIndex = findPreviousIndex(arrNumbers, i);

    if (oldIndex === -1) {
        arrNumbers.push(0);
    } else {
        arrNumbers.push(i - 1 - oldIndex);
    }
}

console.log(arrNumbers[2019]);

// console.log(arrNumbers[2019]);