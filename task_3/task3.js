'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input3.txt');

let forest = String(buffer).split('\n');

let treeCounter1 = 0;
let treeCounter2 = 0;
let treeCounter3 = 0;
let treeCounter4 = 0;
let treeCounter5 = 0;

for (let y = 0; y < forest.length; y++) {
    let x = (y * 3) % forest[y].length;
    if (forest[y][x] === '#') {
        treeCounter1++;
    }
}

for (let y = 0; y < forest.length; y++) {
    let x = (y * 1) % forest[y].length;
    if (forest[y][x] === '#') {
        treeCounter2++;
    }
}

for (let y = 0; y < forest.length; y++) {
    let x = (y * 5) % forest[y].length;
    if (forest[y][x] === '#') {
        treeCounter3++;
    }
}

for (let y = 0; y < forest.length; y++) {
    let x = (y * 7) % forest[y].length;
    if (forest[y][x] === '#') {
        treeCounter4++;
    }
}

for (let y = 0; y < forest.length; y = y + 2) {
    let x = (y / 2) % forest[y].length;
    if (forest[y][x] === '#') {
        treeCounter5++;
    }
}

console.log(treeCounter1 * treeCounter2 * treeCounter3 * treeCounter4 * treeCounter5);