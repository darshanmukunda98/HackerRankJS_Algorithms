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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
  var n=s.length;
if(n%2!==0)    return -1;

var a=s.slice(0,n/2);
var b=s.slice((n/2));
var count=0;
for(let i=0;i<n/2;i++)
    a.includes(b[i]) ? a=a.replace(b[i],"") : count++;


return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}

