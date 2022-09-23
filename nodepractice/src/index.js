// let tipcalc = require('./tipcalc.js') // ES5
import {tipcalc} from './tipcalc.js';  // ES6

let args = process.argv.splice(2);

let billedAmount = parseInt(args[0]);
let tipPercent = parseInt(args[1]);
console.log(tipcalc(billedAmount, tipPercent));
