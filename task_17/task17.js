'use strict';

const fs = require('fs');

let buffer = fs.readFileSync('input17.txt');
let arrCubes = String(buffer).split('\n').map(el => el.split(''));

function findNeighbors(arr, z, x, y) {
    // проверяет содержимое соседей
    // выдает true, если количество включенных ровно 3
    // выдает true, если количество включенных ровно 2 и проверяем мы #
    // выдает false, если что-то другое

    let counter = 0;

    for (let i = z - 1; i < z + 1; i++) {

        for (let j = x - 1; j < x + 1; j++) {

            for (let k = y - 1; k < y + 1; k++) {

                if (arr[i][j][k] === '#') {
                    counter++;
                }

            }

        }
    }

    if (counter === 3) {
        return true;
    } else if (counter === 2) {
        if (arr[z][x][y] === '#') {
            return true;
        }
    } else {
        return false;
    }
}

// новый массив, чтоб менять в нем все, не трогая arrCubes
let iterationCubes = [];
// сборник слоев
let layersCubes = [];

while (arrCubes.length < 6) {

    // сначала копируем текущую версию arrCubes в промежуточный массив
    iterationCubes = arrCubes.slice();
    // Добавляем текущий массив в свой слой
    layersCubes.push(arrCubes);

    // Идем сначала по слоям, на первой итерации это будет всего 1 слой
    for (let z = 0; z < layersCubes.length; z++) {

        for (let x = 0; x < layersCubes[z].length; x++) {

            for (let y = 0; y < layersCubes[z][x].length; y++) {

                // передали элемент в трех координатах
                let checkCube = findNeighbors(layersCubes, z, x, y);

                if (checkCube === true) {
                    iterationCubes[x][y] = "#";
                } else {
                    iterationCubes[x][y] = '.';
                }

                // после проверки добавляем элемент в массив, чтобы расширить его на одну клетку
                iterationCubes[x + 1] = '.';
                iterationCubes[y + 1] = '.';
            }

        }

    }

    // обновляем начальный массив
    arrCubes = iterationCubes.slice();

}

// считаем число включенных во всех слоях
let counterCubes = 0;
for (let i = 0; i < layersCubes.length; i++) {

    for (let j = 0; j < layersCubes[i].length; j++) {

        for (let k = 0; k < layersCubes.length; k++) {

            if (layersCubes[i][j][k] === '#') {
                counterCubes++;
            }

        }

    }

}

// Почему-то выдает 0 и массив слоев пустой :((
console.log(counterCubes);
