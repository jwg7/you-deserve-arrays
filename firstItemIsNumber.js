const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt(`Enter an array: `));

if (typeof userArray[0] === 'number') {
console.log(`${true} - this is a number.`)
} else {
    console.log(`${false} - this is not a number`)
}