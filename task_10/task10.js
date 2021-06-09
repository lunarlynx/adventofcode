'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input10.txt');

let adapters = String(buffer).split('\n').map(el => Number(el));

adapters.push(0);
adapters.sort((a, b) => a - b);

let highAdapter = adapters[adapters.length - 1];
adapters.push(highAdapter + 3);

let oneCounter = 0;
let threeCounter = 0;
for (let i = 0; i < adapters.length; i++) {

    if (adapters[i+1] - adapters[i] === 1) {
        oneCounter++;
    }

    if (adapters[i+1] - adapters[i] === 3) {
        threeCounter++;
    }

}

console.log(adapters);