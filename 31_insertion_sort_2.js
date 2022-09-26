'use strict';

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
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    for(let i = 1;i<n;i++)
    {
        let ele = arr[i];
        for(let j = i-1;j > -1;j-- ){
            if(ele < arr[j])
            {
                arr[j+1] = arr[j]
                arr[j] = ele
            }else{
                arr[j+1] = ele
                break
            }
        }
        console.log(arr.join(' '))
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}

