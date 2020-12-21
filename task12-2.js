'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input12.txt');

let pathInctructions = String(buffer).split('\n').map(el => [el.slice(0, 1), Number(el.replace(/[^+\d]/g, ''))]);


function getValue(arr, i, j) {
    let arrElement = arr[i] ?? [];

    return arrElement[j];
}

function changeDirection(instr, turn) {

    let quad = turn[2];
    let x = turn[0];
    let y = turn[1]
    let deg;
    if (quad === 1) {
        deg = 0;
    }
    if (quad === 2) {
        deg = 90;
    }
    if (quad === 3) {
        deg = 180;
    }
    if (quad === 4) {
        deg = 270;
    }

    if (instr[0] === 'L') {

        deg = deg - instr[1];

        if (deg < 0) {
            deg = deg + 360;
        }

        if (deg === 0) {
            quad = 1;
        }

        if (deg === 90) {
            quad = 2;
        }

        if (deg === 180) {
            quad = 3;
        }

        if (deg === 270) {
            quad = 4;
        }

    }

    if (instr[0] === 'R') {

        deg = deg + instr[1];

        if (deg >= 360) {
            deg = deg - 360;
        }

        if (deg === 0) {
            quad = 1;
        }

        if (deg === 90) {
            quad = 2;
        }

        if (deg === 180) {
            quad = 3;
        }

        if (deg === 270) {
            quad = 4;
        }

    }

    if (quad === 1) {
        x = 'W';
        y = 'N';
    }
    if (quad === 2) {
        x = 'E';
        y = 'N';
    }
    if (quad === 3) {
        x = 'E';
        y = 'S';
    }
    if (quad === 4) {
        x = 'W';
        y = 'S';
    }

    return [x, y, quad];

}

let x = 0;
let y = 0;
// координаты точки x, y, квадрант
let turnWayPoint = [['E', 10], ['N', 1], 2];
let newPoint = [];

for (let i = 0; i < pathInctructions.length; i++) {

    let command = pathInctructions[i][0];

    if (command === 'L' ||
        command === 'R') {
        // хотим получить новый массив с координатами точки
        newPoint = changeDirection(pathInctructions[i], turnWayPoint);
        turnWayPoint[0][0] = newPoint[0];
        turnWayPoint[1][0] = newPoint[1];
        turnWayPoint[2] = newPoint[2]
    }

    let middleResult = 0;
    let middleTerm = getValue(pathInctructions, i, 1);

    if (command === 'E') {
        middleResult = getValue(turnWayPoint, 0, 1);
        turnWayPoint[0][1] = middleResult + middleTerm;
    }
    if (command === 'W') {
        middleResult = getValue(turnWayPoint, 0, 1);
        turnWayPoint[0][1] = middleResult - middleTerm;
    }
    if (command === 'N') {
        middleResult = getValue(turnWayPoint, 1, 1);
        turnWayPoint[1][1] = middleResult + middleTerm;
    }
    if (command === 'S') {
        middleResult = getValue(turnWayPoint, 1, 1);
        turnWayPoint[1][1] = middleResult - middleTerm;
    }

    if (command === 'F') {
        x = getValue(turnWayPoint, 0, 1) * 10;
        y = getValue(turnWayPoint, 1, 1) * 10;
    }
}

console.log(Math.abs(x) + Math.abs(y));

