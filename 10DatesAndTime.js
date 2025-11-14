//dates
let d = new Date();
console.log(d);
console.log(d.toDateString());
console.log(d.toJSON());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(typeof d);

// let myCreatedDate = new Date(2023, 0, 23); here if you give month as 0 it will give january
let myCreatedDate = new Date("2023-01-23"); //here you have to write in normal way as you wanted like you can also write in 23-01-2023 as indian format
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let timeStamp = Date.now();
console.log(timeStamp);

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());

d.setDate(d.getDate() + 1);
console.log(d);
