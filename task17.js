'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input17.txt');
let arrData = String(buffer).split('\n\n');
