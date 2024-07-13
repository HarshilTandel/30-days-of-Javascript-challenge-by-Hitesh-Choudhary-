// Day 1: Variables and Data Types

// Tasks/Activities:

// 🎯Activity 1: Variable Declaration

// 📌* Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var number = 7;
console.log(number);

// 📌* Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let string = "Hi,i am starting 30-days chellenge of Javascript";
console.log(string);

//🎯 Activity 2: Constant Declaration

//📌* Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isTrue = true;
console.log(isTrue);

// 🎯Activity 3: Data Types

//📌*Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
var number2 = 7;
console.log(typeof number2);

let string2 = "Hi,i am starting 30-days chellenge of Javascript";
console.log(typeof string2);

const isTrue2 = true;
console.log(typeof isTrue2);

let person = {
    name: "Harshil",
    age: 25
};
console.log(typeof person); 

let colors = ["red", "green", "blue"];
console.log(typeof colors); 
// 🎯Activity 4: Reassigning Variables

// 📌*Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let myVariable = 10;
console.log("Initial value:", myVariable);

myVariable = 20;
console.log("Reassigned value:", myVariable);
// 🎯Activity 5: Understanding const

//* Task 6: Try reassigning a variable declared with const and observe the error.


// const myVariable2 = 10;
// console.log("Initial value:", myVariable);

// myVariable2 = 20;
// console.log("Reassigned value:", myVariable);

// error : Assignment to constant variable.

// Feature Request 🙇‍♂️

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the values of each variable to the console. ✅
// declaration

let num = 7;
let stringVal = "Harshil";
let valid = true;
let list = ["JavaScript", "Chai", "Code", "Challenge"];
let obj = { name: "HArshil", age: 21 };
let noVal = null;
let undefined;

// logs
console.log("Number type :", num);
console.log("String type :", stringVal);
console.log("Boolean type :", valid);
console.log("Array type :", list);
console.log("Object type :", obj);
console.log("Null type :", noVal);
console.log("Undefined type :", undefined);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment. ✅
let iniVal = 10
const iniValue = 20
console.log(iniVal)
console.log(iniValue)

// reassignment 
iniVal = 50
console.log(iniVal)

iniValue = 100
// console.log(iniValue) //!!ERROR 







