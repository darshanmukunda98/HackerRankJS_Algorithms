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
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    let counter = n - 1;
    let aux = arr[n-1]
    let isSorted = false
    
    while(counter >= 0 && !isSorted)
    {
        if(arr[counter-1] > aux)
        {
        arr[counter] = arr[counter-1]
        }
        else
        {
            arr[counter] = aux
            isSorted = true
        }
        console.log(arr.slice('').join(' '))
        counter--
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}

