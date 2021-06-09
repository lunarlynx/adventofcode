'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input16.txt');
let arrData = String(buffer).split('\n\n');
let arrFields = String(arrData[0]).split('\n').map(el => el.replace(/[^+\d]/g, ' ').replace(/\s+/g, ' ').trim()).map(el => el.split(" ").map(Number));
let nearbyTickets = String(arrData[2]).split('\n').slice(1).map(el => el.replace(/[^+\d]/g, ' ').split(' ').map(Number));
let myTicket = String(arrData[1]).split('\n')[1].replace(/[^+\d]/g, ' ').split(' ').map(Number);


function searchInFields(arr, index) {
    for (let i = 0; i < arrFields.length; i++) {
        if (arr[index] >= arrFields[i][0] && arr[index] <= arrFields[i][1] ||
            arr[index] >= arrFields[i][2] && arr[index] <= arrFields[i][3]) {
            return true;
        }
    }

    return false;
}

function fitnessField(arr, index) {
    for (let i = 0; i < arrFields.length; i++) {
        if (arr[index] >= arrFields[i][0] && arr[index] <= arrFields[i][1] ||
            arr[index] >= arrFields[i][2] && arr[index] <= arrFields[i][3]) {
            return i;
        }
    }

    return false;
}

let validTickets = [];

function isValid(i) {
    for (let j = 0; j < nearbyTickets[i].length; j++) {
        let search = searchInFields(nearbyTickets[i], j);
        if (search === false) {
            return false;
        }
    }

    return true;

}

for (let i = 0; i < nearbyTickets.length; i++) {
    if (isValid(i)) {
        validTickets.push(nearbyTickets[i]);
    }
}

let checkTicket = [];

for (let i = 0; i < validTickets[0].length; i++) {
    for (let k = 0; k < arrFields.length; k++) {
        let counter = 0;
        for (let j = 0; j < validTickets.length; j++) {
            if (validTickets[j][i] >= arrFields[k][0] && validTickets[j][i] <= arrFields[k][1] ||
                validTickets[j][i] >= arrFields[k][2] && validTickets[j][i] <= arrFields[k][3]) {
                counter++;
            }
        }

        if (counter === validTickets.length) {
            checkTicket[k] = myTicket[i];
            break;
        }
    }

}

console.log(checkTicket);