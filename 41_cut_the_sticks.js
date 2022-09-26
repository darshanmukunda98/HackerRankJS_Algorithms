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
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here
    
    let result =[]
    let min = 0
    
    while(arr.length >= 1)
    {
        result.push(arr.length)
        min= Math.min(...arr)
        
        let temp=[]
        
        for(let i of arr)
        if(i!=min)
        temp.push(i-min)
        
        arr=temp
        
    }
    
    
    return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = cutTheSticks(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

