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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let count = new Map()
    arr = arr.map(e => Number(e))
    arr.forEach(e => {count.get(e)? count.set(e, count.get(e) + 1): count.set(e, 1)})
    //sort by keys
    count = new Map([...count].sort())     
    let max = count.get(1)
    let minI = 1           
    for(let i=1;i<count.size+1;i++)
        if(count.get(i) > max)
        max = count.get(i)
        
    for(let i=1;i<count.size+1;i++)
        if(count.get(i) == max)
        {minI = i ; break} 
    return minI

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}

