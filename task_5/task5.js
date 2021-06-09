'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input5.txt');

let tickets = String(buffer).split('\n');

const binarySearch = (ticket) => {
    let row;
    let col;
    let startRow = 0;
    let endRow = 127;
    let startCol = 0;
    let endCol = 7;

    for (let i = 0; i < 7; i++) {
        let middle;

        if (ticket[i] === 'F') {
            middle = Math.floor((startRow + endRow) / 2);
            endRow = middle;
        }
        else {
            if (ticket[i] === 'B') {
                middle = Math.round((startRow + endRow) / 2);
                startRow = middle;
            }
        }
    }

    if (startRow === endRow) {
        row = startRow;
    } else {
        throw Error("HUSTON WE HAVE AN ISSUE");
    }

    for (let i = 7; i <= 9; i++) {

        let middle;

        if (ticket[i] === 'R') {
            middle = Math.round((startCol + endCol) / 2);
            startCol = middle;
        }
        else if (ticket[i] === 'L') {
            middle = Math.floor((startCol + endCol) / 2);
            endCol = middle;
        }
    }

    if (startCol === endCol) {
        col = startCol;
    } else {
        throw Error("HUSTON WE HAVE AN ISSUE");
    }

    return [row, col];

};

let ID = [];

for (let i = 0; i < tickets.length; i++) {
    let ticket = binarySearch(tickets[i]);
    ID[ticket[0] * 8 + ticket[1]] = true;
}

for (let i = 0; i < ID.length; i++) {
    if ((ID[i] === true) && (ID[i+2] === true) && (ID[i+1] === undefined)) {
        console.log(i+1);
    }
}
