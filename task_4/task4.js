'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input4.txt');

let passports = String(buffer).split('\n\n').map(el => el.split('\n').join(' ').split(' '));
let passportCounter = 0;


function validation(arr) {
    let valid = 0;
    for (let i = 0; i < arr.length; i++) {
        let strings = arr[i].split(':');

        // проверка поля byr формата 4 символа в диапазоне 1920-2002
        if ((strings[0] === 'byr') &&
            (strings[1].length === 4) &&
            (1920 <= Number(strings[1]) && Number(strings[1]) <= 2002)) {
            valid++;
        }

        // проверка поля iyr формата 4 символа в диапазоне 2010-2020
        if ((strings[0] === 'iyr') &&
            (strings[1].length === 4) &&
            (2010 <= Number(strings[1]) && Number(strings[1]) <= 2020)) {
            valid++;
        }

        // проверка поля eyr формата 4 символа в диапазоне 2020-2030
        if ((strings[0] === 'eyr') &&
            (strings[1].length === 4) &&
            (2020 <= Number(strings[1]) && Number(strings[1]) <= 2030)) {
            valid++;
        }

        // проверка поля hgt вида 000cm или 00in
        if ((strings[0] === 'hgt') &&
            ((/^([0-9]{3}cm)$/.test(strings[1])) || (/^([0-9]{2}in)$/.test(strings[1])))) {
                if (strings[1].endsWith('cm') &&
                (150 <= Number(strings[1].replace(/\D/g,'')) &&
                    Number(strings[1].replace(/\D/g,'')) <= 193)) {
                    valid++;
                }
                if (strings[1].endsWith('in') &&
                    (59 <= Number(strings[1].replace(/\D/g,'')) &&
                        Number(strings[1].replace(/\D/g,'')) <= 76)) {
                    valid++;
                }
        }

        // проверка поля hcl вида #000000
        if ((strings[0] === 'hcl') &&
            (/^(#[a-f0-9]{6})$/.test(strings[1]))) {
            valid++;
        }

        // проверка поля ecl вида совпадение со значением
        if ((strings[0] === 'ecl') &&
            (/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(strings[1]))) {
            valid++;
        }

        // проверка поля pid вида 9-значное число
        if ((strings[0] === 'pid') &&
            (/^([0-9]{9})$/.test(strings[1]))) {
            valid++;
        }
    }

    return valid;
}

for (let i = 0; i < passports.length; i++) {

    let valid = validation(passports[i]);

    if (valid === 7) {
        passportCounter++;
    }
}

console.log(passportCounter);