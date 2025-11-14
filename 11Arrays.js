//array
let arr = [1, 2, 3, 4, 5, 6, true, "anshul"];
console.log(arr);

//inorder to access particular array we use
console.log(arr[0]);

//to print all the elements
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//array methods
//push method
arr.push(7); //used to add element at last
console.log(arr);
//pop method
arr.pop(); //used to remove element from last
console.log(arr);
//unshift method
arr.unshift(0); //used to add element at first
console.log(arr);
//shift method
arr.shift(); //used to remove element from first
console.log(arr);
//join method
console.log(arr.join("==>")); //used to convert array into string and also give format to seperate them
//slice method
console.log(arr.slice(1, 3)); //used to print particular element from the array
//splice method
console.log(arr.splice(1, 3)); //used to remove particular element from the array

// concat method
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//example
// arr1.push(arr2);
// console.log(arr1);//it actually push array into array not its elements

let arr3 = arr1.concat(arr2);
console.log(arr3);

//spread operator
let arr4 = [...arr1, ...arr2];
console.log(arr4);
arr4[0] = 10;
console.log(arr1);
