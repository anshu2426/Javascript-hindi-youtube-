//function
function greet() {
  console.log("hii my name is anshul yadav nice to meet you");
}
greet();
greet();
greet();
greet();

function add(n1, n2) {
  return n1 + n2;
}

console.log(add(2, 3));
console.log(add(3, 3));
console.log(add(4, 3));

//rest parameter
function add(...n) {
  return n;
} //main function of this is that it will take all the elements and will return an array of that all arugment element that we passed
console.log(add(2, 3));
console.log(add(3, 3));
console.log(add(4, 3));

//object and array pass
function add(obj) {
  console.log(obj);
}
add({ name: "anshul", age: 20 });

function add(arr) {
  console.log(arr);
}
add([1, 2, 3, 4, 5]);
