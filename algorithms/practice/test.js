'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'interpolate' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY instances
 *  3. FLOAT_ARRAY price
 */

function interpolate(n, instances, price) {
    // Write your code here

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const instancesCount = parseInt(readLine().trim(), 10);

    let instances = [];

    for (let i = 0; i < instancesCount; i++) {
        const instancesItem = parseInt(readLine().trim(), 10);
        instances.push(instancesItem);
    }

    const priceCount = parseInt(readLine().trim(), 10);

    let price = [];

    for (let i = 0; i < priceCount; i++) {
        const priceItem = parseFloat(readLine().trim());
        price.push(priceItem);
    }

    const result = interpolate(n, instances, price);

    ws.write(result + '\n');

    ws.end();
}
