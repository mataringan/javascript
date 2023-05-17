// JavaScript comments can be used to explain JavaScript code, and to make it more readable.

// JavaScript comments can also be used to prevent execution, when testing alternative code.

// Single Line Comments
// Single line comments start with //.

// Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

// Change Paragraph:
document.getElementById("demo").innerHTML = "Sample text with comments // ";

// This example uses a single line comment at the end of each line to explain the code:
let x = 2; // Declare x, give it the value of 2
let y = x + 3; // Declare y, give it the value of x + 3

// Multi-line Comments
// Multi-line comments start with /* and end with */.

// Any text between /* and */ will be ignored by JavaScript.

// Example
/*
The code below will change
the heading with id = "demo"
via the click of a button
*/
const buttonDemo = document.querySelector(".buttonDemo");
buttonDemo.addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "Sample text with comments /*";
});
