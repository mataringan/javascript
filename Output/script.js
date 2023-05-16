// Javascript Output

// innerHTML

const demo = document.getElementById("demo");
demo.innerHTML = "Hello From JS - innerHTML";

// document write
document.write("This text was created with document write");

const buttonChange = document.querySelector(".buttonChange");

buttonChange.addEventListener("click", function () {
  document.write("This text was created with document write and button");
});

// windows alert
window.alert("This text was created with window alert");

// alert
const buttonAlert = document.querySelector(".buttonAlert");

buttonAlert.addEventListener("click", function () {
  alert("This text was created with alert");
});

// console log
// For debugging purposes, you can call the console.log() method in the browser to display data.
console.log("This text was created with console.log()");

// javascript print - windows print
const buttonPrint = document.querySelector(".buttonPrint");
buttonPrint.addEventListener("click", function () {
  window.print("This text was created with javascript print - windows print");
});
