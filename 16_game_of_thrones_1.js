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
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    // Write your code here
let ar = s.split('').sort();
let oddcount = 0;
let count = 1;
for(let i = 0;i < ar.length;i++)
{
    if(ar[i] == ar[i+1])count++;
    else {
        if(count % 2 == 1){ 
            oddcount++;
        if(oddcount > 1) return "NO"
        
        }
        count = 1
    }
}  
    return "YES"
    
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = gameOfThrones(s);

    ws.write(result + '\n');

    ws.end();
}

