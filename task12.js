'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input12.txt');

let pathInctructions = String(buffer).split('\n');

function changeDirection(instr, turn) {

    let deg = 0;
    if (turn === 'N') {
        deg = 90;
    }

    if (turn === 'E') {
        deg = 0;
    }

    if (turn === 'S') {
        deg = 270;
    }

    if (turn === 'W') {
        deg = 180;
    }

    if (instr[0] === 'L') {
        deg = deg + instr[1];
    } else if (instr[0] === 'R') {
        deg = deg - instr[1];
    }

    if (deg < 0) {
        deg = deg + 360;
    }
    if (deg >= 360) {
        deg = deg - 360;
    }

    if (Math.abs(deg) / 90 === 0) {
        return  'E';
    }

    if (Math.abs(deg) / 90 === 1) {
        return  'N';
    }

    if (Math.abs(deg) / 90 === 2) {
        return  'W';
    }

    if (Math.abs(deg) / 90 === 3) {
        return  'S';
    }

    throw new Error();
}

let x = 0;
let y = 0;
let turn = 'E';

for (let i = 0; i < pathInctructions.length; i++) {
    let command = pathInctructions[i][0];

    if (command === 'L' ||
        command === 'R') {
        turn = changeDirection(pathInctructions[i], turn);
    }
    if (command === 'F') {
        command = turn;
    }

    if (command === 'E') {
        x = x + pathInctructions[i][1];
    }
    if (command === 'W') {
        x = x - pathInctructions[i][1];
    }
    if (command === 'N') {
        y = y + pathInctructions[i][1];
    }
    if (command === 'S') {
        y = y - pathInctructions[i][1];
    }
}

console.log(Math.abs(x) + Math.abs(y));