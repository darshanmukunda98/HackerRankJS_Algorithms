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
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    // Write your code here
    let r = [...s].reverse()
    s = [...s].map((e) => e.charCodeAt())
    r = [...r].map((e) => e.charCodeAt())
    let s1=[]
    let r1=[]
    for(let i = 0;i<s.length-1;i++)
    s1.push(Math.abs(s[i] - s[i+1]))
    for(let i = 0;i<r.length-1;i++)
    r1.push(Math.abs(r[i] - r[i+1]))
    
    //console.log(s1 +' === '+ r1)
    
    return s1.toString() == r1.toString() ? "Funny" : "Not Funny"

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}

