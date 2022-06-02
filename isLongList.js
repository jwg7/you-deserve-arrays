const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt(`Enter an array: `));

if (userArray.length >= 10) {
    console.log(true);
} else {
    console.log(false);
}