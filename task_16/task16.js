'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input16.txt');
let arrData = String(buffer).split('\n\n');
let arrFields = String(arrData[0]).split('\n').map(el => el.replace(/[^+\d]/g, ' ').replace(/\s+/g, ' ').trim()).map(el => el.split(" ").map(Number));
let nearbyTickets = String(arrData[2]).split('\n').slice(1).map(el => el.replace(/[^+\d]/g, ' ').split(' ').map(Number));


function searchInFields(arr, index) {
    for (let i = 0; i < arrFields.length; i++) {
        if (arr[index] >= arrFields[i][0] && arr[index] <= arrFields[i][1] ||
            arr[index] >= arrFields[i][2] && arr[index] <= arrFields[i][3]) {
            return true;
        }
    }

    return false;
}

let invalidSum = 0;
for (let i = 0; i < nearbyTickets.length; i++) {
    for (let j = 0; j < nearbyTickets[i].length; j++) {
        let search = searchInFields(nearbyTickets[i], j);
        if (search === false) {
            invalidSum = invalidSum + nearbyTickets[i][j];
        }
    }
}

console.log(invalidSum);