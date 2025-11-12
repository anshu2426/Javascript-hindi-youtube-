let score = "33abc";
console.log(typeof score);
let value = Number(score);
console.log(typeof value);
console.log(value++);
let final = String(value);
console.log(typeof final);
console.log(final);
//"33"==>33
//33==>"33"
//"33abc"==>NaN (in number it will give NaN)
//null==>0 (in number it will give 0)
//undefined==>NaN (in number it will give NaN)
