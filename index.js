const yargs = require("yargs");
const co2cal = require("./src/co2calculator");

let transMeth = yargs.argv["transportation-method"];
let distance = yargs.argv.distance;
let unitOfDistance = yargs.argv["unit-of-distance"];

console.log(co2cal(transMeth, distance, unitOfDistance));
