'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input11.txt');

let allSeats = String(buffer).split('\n').map(el => el.split(''));

function getValue(arr, i, j) {
    let arrElement = arr[i] ?? [];

    return arrElement[j];
}

function printArr(arr) {
    console.log()
    console.log()
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


let newAllSeats = [];


function countOccupied(i, j) {
    let occupied = 0;
    // hl - горизонтальная ось слева, hr - справа
    // vu - вертикальная ось up, vd down
    // l - диагональ наклонена влево
    // r - диагональ наклонена вправо
    let hl = j - 1;
    while (hl >= 0) {
        if (getValue(allSeats, i, hl) === '.') {
            hl--;
        } else if (getValue(allSeats, i, hl) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }

    let hr = j + 1;
    while (hr < allSeats[i].length) {
        if (getValue(allSeats, i, hr) === '.') {
            hr++;
        } else if (getValue(allSeats, i, hr) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }

    let vu = i - 1;
    while (vu >= 0) {
        if (getValue(allSeats, vu, j) === '.') {
            vu--;
        } else if (getValue(allSeats, vu, j) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }

    let vd = i + 1;
    while (vd < allSeats.length) {
        if (getValue(allSeats, vd, j) === '.') {
            vd++;
        } else if (getValue(allSeats, vd, j) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }

    let dluA = i - 1;
    let dluB = j - 1;
    while (dluA >= 0 && dluB >= 0) {
        if (getValue(allSeats, dluA, dluB) === '.') {
            dluA--;
            dluB--;
        } else if (getValue(allSeats, dluA, dluB) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }

    let dldA = i - 1;
    let dldB = j + 1;
    while (dldA >= 0 && dldB < allSeats[i].length) {
        if (getValue(allSeats, dldA, dldB) === '.') {
            dldA--;
            dldB++;
        } else if (getValue(allSeats, dldA, dldB) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }
    let druA = i + 1;
    let druB = j - 1;
    while (druA < allSeats.length && druB >= 0) {
        if (getValue(allSeats, druA, druB) === '.') {
            druA++;
            druB--;
        } else if (getValue(allSeats, druA, druB) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }

    let drdA = i + 1;
    let drdB = j + 1;
    while (drdA < allSeats.length && drdB < allSeats[i].length) {
        if (getValue(allSeats, drdA, drdB) === '.') {
            drdA++;
            drdB++;
        } else if (getValue(allSeats, drdA, drdB) === 'L') {
            break
        } else {
            occupied++;
            break
        }
    }
    return occupied;
}

while (!twoArray(allSeats, newAllSeats)) {
    allSeats = newAllSeats.length > 0 ? newAllSeats : allSeats;
    newAllSeats = allSeats.slice();
    for (let i = 0; i < newAllSeats.length; i++) {
        newAllSeats[i] = newAllSeats[i].slice();
    }

    for (let i = 0; i < allSeats.length; i++) {
        for (let j = 0; j < allSeats[i].length; j++) {
            if (getValue(allSeats, i, j) === 'L') {
                let occupied = countOccupied(i, j);

                if (occupied === 0) {
                    newAllSeats[i][j] = '#';
                }

            } else if (getValue(allSeats, i, j) === '#') {
                let occupied = countOccupied(i, j);

                if (occupied >= 5) {
                    newAllSeats[i][j] = 'L';
                }

            }

        }

    }
    // printArr(newAllSeats);
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

