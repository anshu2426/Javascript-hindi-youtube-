//this keyword
const a = {
  name: "anshul",
  city: "delhi",
  log: function () {
    console.log(this.name);
    console.log(this.city);
    console.log(this);
  },
};
a.log();
//arrow function
const b = () => {
  console.log("this is arrow function");
};
b();
//implicit return
const c = (n1, n2) => n1 + n2;
console.log(c(1, 2));

//IIFE(immediately invoked function expression)
(() => {
  console.log("this is iife");
})();
//it is used to execute a function immediately
