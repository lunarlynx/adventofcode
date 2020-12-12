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
        finalLineRight = preLine[1].split(', ').map(el => el.replace(/[0-9]\W*/g, '').replace(' bags', '').replace(' bag', ''));
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
let finalBags = new Set();
while (ourBags.length > 0) {
    let el = ourBags.pop();
    for (let i = 0; i < arrParsed.length; i++) {

        if (arrParsed[i][1].includes(el) === true) {
            ourBags.push(arrParsed[i][0]);
            finalBags.add(arrParsed[i][0]);
        }
    }
}

console.log(finalBags);