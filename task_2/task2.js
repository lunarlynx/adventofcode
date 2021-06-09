'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input2.txt');

let passwords = String(buffer).split('\n'); //массив политик и паролей
let passCounter = 0; //счетчик годных паролей

for (let i = 0; i < passwords.length; i++) {
    let politicLine = passwords[i].split(' '); //массив из одной политики и одного пароля

    // politicLine состоит из трех частей: диапазона, символа и пароля
    let sMinMax = politicLine[0].split('-').map(Number); //массив из минимума и максимума символов
    let symbol = politicLine[1].slice(0, 1); //сам символ из политики
    let pass = politicLine[2]; //массив символов пароля

    // Сравниваем символы на позициях min и max
    if ((pass[sMinMax[0]-1] === symbol && symbol !== pass[sMinMax[1]-1]) || (pass[sMinMax[0]-1] !== symbol && symbol === pass[sMinMax[1]-1])) {
        passCounter++;
    }

}

console.log(passCounter);

