'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input6.txt');

let group = String(buffer).split('\n\n').map(el => el.split("\n"));
let yesAnswer = 0;

for (let i = 0; i < group.length; i++) {
    let firstLine = new Set();

    for (let k = 0; k < group[i][0].length; k++) {
        firstLine.add(group[i][0][k]);
    }

    //star letters
    for (let letter of firstLine) {

        //lines
        let counter = 1;
        for (let j = 1; j < group[i].length; j++) {
            //symbols
            for (let k = 0; k < group[i][j].length; k++) {
                if (letter === group[i][j][k]) {
                    counter++;
                    break
                }
            }
        }
        if (counter === group[i].length) {
            yesAnswer++;
        }
    }

}

console.log(yesAnswer);

