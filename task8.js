'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input8.txt');

let instructions = String(buffer).split('\n').map(el => el.split(' '));

function isItRightIndex(arr) {
    let accumulator = 0;
    let i = 0;
    let indexSet = new Set();

    while (!indexSet.has(i)) {
        let el = arr[i];
        indexSet.add(i);
        if (el[0] === 'acc') {
            accumulator = accumulator + Number(el[1]);
            i++;
        } else if (el[0] === 'jmp') {
            i = i + Number(el[1]);
        } else if (el[0] === 'nop') {
            i++;
        } else {
            throw new Error();
        }
        if (i >= arr.length) {
            return accumulator;
        }
    }
    return undefined;
}


for (let i = 0; i < instructions.length; i++) {

    let falseInstructions = [...instructions];

    if (falseInstructions[i][0] === 'jmp') {
        falseInstructions[i] = ['nop',  falseInstructions[i][1]];
    } else if (falseInstructions[i][0] === 'nop') {
        falseInstructions[i] = ['jmp',  falseInstructions[i][1]];
    }

    let accumulator = isItRightIndex(falseInstructions);

    if (accumulator !== undefined) {
        console.log(accumulator);
        break
    }
}


