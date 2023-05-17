let x, y, z; // Declare 3 variables
x = 2; // Assign the value 2 to x
y = 3; // Assign the value 3 to y
z = x + y; // Assign the sum of x and y to z

document.getElementById("demo").innerHTML = "The value of z is " + z + ".";

// Javascript code bloks are written between {and}

const buttonText = document.querySelector(".buttonText");

buttonText.addEventListener("click", function () {
  document.getElementById("text1").innerHTML = "Hello Jamal";
  document.getElementById("text2").innerHTML = "How Are you ?";
});
