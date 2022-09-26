'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    // Write your code here
     if (arr.length < brr.length) {
        [ arr, brr ] = [ brr, arr ];
    }
    const result = {};
    arr.forEach(i => result[i] ? result[i]++ : result[i] = 1);
    brr.forEach(i => result[i] ? result[i]-- : result[i] = -1);
    console.log(result)
    return Object
        .keys(result)
        .filter(v => result[v])

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine().trim(), 10);

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

