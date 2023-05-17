/* 
4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing
*/

// What are Variables?
// Variables are containers for storing data (storing data values).

// In this example, x, y, and z, are variables, declared with the let keyword:

let x = 2;
let y = 4;
let z = x + y;

// In this example, x, y, and z, are undeclared variables:
a = 1;
b = 2;
c = a + b;

// variable naming rules in javascript
// Variables cannot have a number in front of them
//example
// let 5number;

// Variables can use initial underscores
// example
let _number = 123;

// variable is recommended to use CamelCase if it consists of two syllables
// example
let firstName = "Mata";

// Javascript Dollar sign $
// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names

let $myMoney = 1000;
/* 
Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
*/

/* 
When to Use JavaScript var?
Always declare JavaScript variables with var,let, orconst.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.
*/

// Javascript Let
// Variables defined with let can not be redeclared.

// Variables defined with let must be declared before use.

// Variables defined with let have block scope.

// Block Scope
// Before ES6 (2015), JavaScript had Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:
// Example
{
  let x = 2;
}
// x can NOT be used here

/* 
When to Use JavaScript const?
If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.

In this example, price1, price2, and total, are variables:

The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
*/
// Example
const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error

// Incorrect
// const PI_Incorrect;
// PI_Incorrect = 3.14159265359;

const price1 = 50;
const price2 = 150;
let total = price1 + price2;

/* 
The two variables price1 and price2 are declared with the const keyword.

These are constant values and cannot be changed.

The variable total is declared with the let keyword.

This is a value that can be changed.
*/

/**
 Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
 */

/* 
Constant Arrays
You can change the elements of a constant array:
*/
// You can create a constant array:
const cars = ["Toyota", "Suzuki"];

// You can change an element:
cars[0] = "BMW";

// But you can NOT reassign the array:
cars = ["Ferari", "Lamborghini"]; // error
console.log(cars);

// Constant Objects
// You can change the properties of a constant object:
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign the object:
const car = { type: "Fiat", model: "500", color: "white" };

car = { type: "Volvo", model: "EX60", color: "red" }; // ERROR

// Declaring a JavaScript Variable
// Creating a variable in JavaScript is called "declaring" a variable.

// You declare a JavaScript variable with the var or the let keyword:
let author;
author = "mata";
//You can also assign a value to the variable when you declare it:
let fullName = "mataringan";

//One Statement, Many Variables
// Start the statement with let and separate the variables by comma:
let person = "Taofik Arianto",
  city = "ciamis",
  zipCode = 46385;

// Value Undefined
// A variable declared without a value will have the value undefined.
let yourName;
