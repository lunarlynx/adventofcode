'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input14.txt');

let memoryWrites = String(buffer).split('\n');
let mem = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let mask = '';
for (let i = 0; i < memoryWrites.length; i++) {
    if (memoryWrites[i].includes('mask')) {
        mask = memoryWrites[i].replace('mask = ', '');
    }

    let memLine = [];
    if (memoryWrites[i].includes('mem')) {

        memLine = memoryWrites[i].split(' = ').map(el => el.replace(/[^+\d]/g, ''));
        memLine[1] = parseInt(memLine[1]).toString(2).padStart(36, "0");

        let res = "";
        for (let j = 0; j < mask.length; j++) {
            if (mask[j] !== 'X') {
                res += mask[j];
            } else {
                res += memLine[1][j];
            }
        }

        mem[memLine[0]] = parseInt(res, 2);;
    }

}

console.log(mem.reduce(reducer));
