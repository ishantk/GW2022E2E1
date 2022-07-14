"use strict";
// Create Single Value Storage Containers

// keyword var has more scope
//var amount = 1000;
//var promoCode = "TRYNEW";

// let has a local scope or lesser scope
// Create Operation
let amount = 1000;
let promoCode = "TRYNEW";

// Update Operation
amount = 1200;

// View -> Printed the data on Console
console.log("Amount is: \u20b9"+amount);
console.log("PromCode is: "+promoCode);

console.log("Type of amount is: "+typeof amount);
console.log("Type of PromoCode is: "+typeof promoCode);

let age = "12";
let numAge = Number(age);
console.log("Age is: "+age+" and type of age is: "+typeof age);
console.log("numAge is: "+numAge+" and type of numAge is: "+typeof numAge);

/*
    String
    Number
    BigInt
    Boolean
    undefined
    null
    Symbol -> Kind of a constant
    Object -> Multi Value Container | Homogeneous/Hetrogeneous 
    Array ->  Multi Value Container | Homogeneous/Hetrogeneous 
*/

// Primitive Data Type
const appName = "Instagram";
console.log("appName is: "+appName+" and type of appName is: "+typeof appName);
//appName = "Meta Instagram"; // we cannot update it :)

let phoneNumber = 9915571177n;
console.log("phoneNumber is: "+phoneNumber+" and type of phoneNumber is: "+typeof phoneNumber);

let cafeName; // not initialized ->  undefined
let result = null; // on a minimial you can initialize it with null
console.log("Cafe Name is: "+cafeName);
console.log("result is: "+result);

const value = Symbol("Instagram");
console.log("value is: "+value.description+" and type of value is: "+typeof value);

let student = {
    roll: 101,
    name: "John",
    age: 20
};

console.log("student is: "+student+" and type of student is: "+typeof student);
console.log(student);

//        0   1   2
let marks = [10, 20, 30]; // Homo -> i.e. all elements are integers
console.log(marks);

console.log(student['name']);
console.log(marks[1]);
