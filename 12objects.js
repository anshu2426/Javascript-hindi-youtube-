let a = {
  name: "anshul",
  age: 20,
  isloggenin: true,
  state: null,
  city: "delhi",
  address: "noida",
  "postal code": 201301,
  avaialble: [1, 2, 3, 4, 5],
};

console.log(a.name);
console.log(a["postal code"]);
console.log(a["age"]);
console.log(a.avaialble[2]);

a.name = "anshul yadav";
console.log(a.name);

//object methods
console.log(Object.keys(a));
console.log(Object.values(a));
console.log(Object.entries(a));

//function
a.greet = function () {
  console.log("hello my name is " + this.name);
  console.log("hello my name is " + this["name"]);
  console.log("hello my name is " + this["city"]);
};

console.log(a.greet());
console.log(a["greet"]());
a.greet();

//using two object to create new object

let obj1 = {
  1: 1,
  2: 2,
};
let obj2 = {
  3: 3,
  4: 4,
};

// let obj3 = {
//   ...obj1,
//   ...obj2,
// };//using spread operator

let obj3 = Object.assign(obj1, obj2); //using Object.assign
console.log(obj3);

//object destructring

let { age, city } = a;
console.log(age);
console.log(city);

//api

let url = "https://jsonplaceholder.typicode.com/posts/1";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.userId));
