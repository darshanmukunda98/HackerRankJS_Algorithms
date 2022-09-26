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
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
    // Write your code here
    s1 = [...s1].sort()
    s2 = [...s2].sort()
    
    let s1c = new Map();
    let s2c = new Map();
    console.log(typeof(s1));
    console.log(typeof(s2));
    s1.forEach(e => s1c.get(e) ? s1c.set(e, s1c.get(e) + 1) : s1c.set(e,1))
    s2.forEach(e => s2c.get(e) ? s2c.set(e, s2c.get(e) + 1)  : s2c.set(e,1))
    
    let sum = 0
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for(let i of alpha)
    if(s1c.has(i) && s2c.has(i))
    sum+= Math.abs(s1c.get(i) - s2c.get(i))
    else if(s1c.has(i) || s2c.has(i) )
    {
        if(s1c.has(i))
        sum+= s1c.get(i)
        else
        sum+= s2c.get(i)   
    }
    return sum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = makingAnagrams(s1, s2);

    ws.write(result + '\n');

    ws.end();
}

