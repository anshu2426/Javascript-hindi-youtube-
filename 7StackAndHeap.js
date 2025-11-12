//stack store all the primitive value inside it
let a = 10;
let b = 20;
console.log(a);
console.log(b);

//heap is used to store all the non-primitive value
let obj1 = { name: "hitesh" };
let obj2 = obj1;
obj2.name = "anshul";
console.log(obj1.name); //so here it like obj1 contain reference of that object inside itself in stack and that original object is stored in heap
console.log(obj2.name);
