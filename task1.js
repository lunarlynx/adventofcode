'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input.txt');

let numberBuffer = String(buffer).split('\n').map(Number);

for (let i = 0; i < numberBuffer.length; i++) {
    for (let j = i+1; j < numberBuffer.length; j++) {
        for (let k = j+1; k < numberBuffer.length; k++) {
            let a = numberBuffer[i];
            let b = numberBuffer[j];
            let c = numberBuffer[k];
            if (a + b + c === 2020) {
                console.log(a * b * c);
            }
        }
    }

}