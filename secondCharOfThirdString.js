const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt(`Enter an array: `));


if (typeof userArray[2] === 'string') {
console.log(userArray[3][2])
} else {
    console.log(`Item 3 isn't a string. Error.`)
}
