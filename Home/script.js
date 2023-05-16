const buttonDemo = document.querySelector(".displayButton");

function myFunction() {
  document.getElementById("demo").innerHTML = Date();
}

buttonDemo.addEventListener("click", myFunction);
