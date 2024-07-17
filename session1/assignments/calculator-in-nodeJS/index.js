const { randomBytes, randomInt } = require('node:crypto');

// console.log(process.argv);
let commandLine = process.argv;
let operation = commandLine[2];
let a = Number(commandLine[3]);
let b = Number(commandLine[4]);

let result = 0;

switch(operation){
    case "add":
        result = a + b;
        break;
    case "sub":
        result = a - b;
        break;
    case "mult":
        result = a * b;
        break;
    case "divide":
        result = a / b;
        break;
    case "sin":
        result = Math.sin(a);
        break;
    case "cos":
        result = Math.cos(a);
        break;
    case "tan":
        result = Math.tan(a);
        break;
    case "random":
        let landVal = randomInt(a);
        result = `Random value between 0 to ${a}: ${landVal}`;
        break;

    default:
        console.log("Invalid operation");
}


console.log(result);