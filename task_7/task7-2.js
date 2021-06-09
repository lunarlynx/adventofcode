'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input7.txt');

let bags = String(buffer).split('.\n').filter(el => el.length != 0 );

//[bag-name, [sub-bags]]
function parseLine(line) {

    let preLine = line.split(' contain ');
    let finalLineLeft = preLine[0].replace(' bags', '');
    let finalLineRight = [];

    if (preLine[1].includes('no other') === true) {
        finalLineRight = [];
    } else {
        finalLineRight = preLine[1].split(', ').map(el => [Number(el.replace(/[^+\d]/g, '')), el.replace(/[0-9]\W*/g, '').replace(' bags', '').replace(' bag', '')]);
    }

    let finalLine = [];
    finalLine[0] = finalLineLeft;
    finalLine[1] = finalLineRight;

    return finalLine;

}

let arrParsed = [];
for (let i = 0; i < bags.length; i++) {
    let parsedLine = parseLine(bags[i]);
    arrParsed.push(parsedLine);
}

let ourBags = ['shiny gold'];
let globalCounter = 0;

while (ourBags.length > 0) {
    let el = ourBags.pop();
    for (let i = 0; i < arrParsed.length; i++) {
        if (arrParsed[i][0] === el) {
            for (let j = 0; j < arrParsed[i][1].length; j++) {
                let howMany = arrParsed[i][1][j][0];
                for (let k = 0; k < howMany; k++) {
                    ourBags.push(arrParsed[i][1][j][1]);
                    globalCounter++;
                }

            }

        }
    }
}

console.log(globalCounter);