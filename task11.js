'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input11.txt');

let allSeats = String(buffer).split('\n').map(el => el.split(''));

function getValue(arr, i, j) {
    let arrElement = arr[i] ?? [];

    return arrElement[j];
}

function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join(''));
    }
}

function twoArray(arrA, arrB) {
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrA[i].length; j++) {
            if (getValue(arrA, i, j) !== getValue(arrB, i, j)) {
                return false;
            }
        }
    }

    return true;
}


//это только первая итерация, потом надо будет пройтись много раз

let newAllSeats = []

while (!twoArray(allSeats, newAllSeats)) {
    allSeats = newAllSeats.length > 0 ? newAllSeats : allSeats;
    newAllSeats = allSeats.slice();
    for (let i = 0; i < newAllSeats.length; i++) {
        newAllSeats[i] = newAllSeats[i].slice();
    }

    for (let i = 0; i < allSeats.length; i++) {
        for (let j = 0; j < allSeats[i].length; j++) {
            if (allSeats[i][j] !== '.') {
                if (getValue(allSeats, i, j) === 'L' &&
                    getValue(allSeats,i-1, j-1) !== '#' &&
                    getValue(allSeats,i-1, j) !== '#' &&
                    getValue(allSeats,i-1, j+1) !== '#' &&
                    getValue(allSeats, i, j-1) !== '#' &&
                    getValue(allSeats, i, j+1) !== '#' &&
                    getValue(allSeats, i+1, j-1) !== '#' &&
                    getValue(allSeats, i+1, j) !== '#' &&
                    getValue(allSeats, i+1, j+1) !== '#') {

                    newAllSeats[i][j] = '#';

                } else if (getValue(allSeats, i, j) === '#') {

                    let occupied = 0;

                    for (let k = i - 1; k <= i + 1; k++) {

                        for (let l = j - 1; l <= j + 1; l++) {

                            if (getValue(allSeats, k, l) === "#") {
                                occupied++;
                            }

                        }

                    }

                    if (occupied >= 5) {
                        newAllSeats[i][j] = 'L';
                    }

                }

            }

        }

    }
}

let finalCounter = 0;

for (let i = 0; i < newAllSeats.length; i++) {
    for (let j = 0; j < newAllSeats[i].length; j++) {
        if (getValue(newAllSeats, i, j) === "#") {
            finalCounter++;
        }
    }
}

console.log(finalCounter);

