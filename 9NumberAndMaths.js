//Number
const score = 400;
console.log(score);
const balance = new Number(400);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//Math
console.log(Math);
console.log(Math.abs(-100));
console.log(Math.round(Math.random() * 3));
//if given in range
let max = 20;
let min = 10;
console.log(Math.round(Math.random() * (max - min + 1) + min));
