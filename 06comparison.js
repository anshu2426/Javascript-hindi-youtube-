console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 3);
console.log(2 <= 3);
console.log(2 == 3);
console.log(2 != 3);

//different datatype comparison
console.log(2 == "2"); //why it will give true because it will convert 2 to string
console.log(2 === "2"); //=== strict comparison it check the datatype as well as value
console.log(2 != "2");
console.log(2 !== "2"); //!== strict comparison it check the datatype as well as value

//null and undefined
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // == and >= give different result they both check value differently
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);
