'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input13.txt');

let rightNow = Number(String(buffer).split('\n')[0]);
let busArr = String(buffer).split('\n')[1].split(',');
let busTimes = [];

for (let i = 0; i < busArr.length; i++) {

    if (busArr[i] !== 'x') {
        let busTime = 0;
        while (busTime < rightNow) {
            busTime = busTime + Number(busArr[i]);
        }

        busTimes.push([busArr[i], busTime]);

    }

}
//1000517

let min = [];
for (let busTime of busTimes) {
    if (min[1] == null || busTime[1] < min[1]) {
        min = busTime;
    }
}

console.log((min[1] - rightNow) * min[0]);