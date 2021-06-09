'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input10.txt');

let adapters = String(buffer).split('\n').map(el => Number(el));

adapters.push(0);
adapters.sort((a, b) => a - b);

let highAdapter = adapters[adapters.length - 1];
adapters.push(highAdapter + 3);

let results = [];

function calcCombinations(arr, index) {
    let result = 0;
    if (results[index] !== undefined) {
        result = results[index];
    } else {
        for (let i = 1; i < 4 && (index + i < arr.length); i++) {
            if (arr[index + i] - arr[index] <= 3) {
                result = result + calcCombinations(arr, index + i);
            }
        }

        if (index === arr.length - 1) {
            result = result + 1;
        }
        results[index] = result;
    }

    return result;

}


let pathCounter = calcCombinations(adapters, 0);
console.log(pathCounter);