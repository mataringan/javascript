// // get button turn on
// const buttonTurnOn = document.querySelector(".buttonTurnOn");

// buttonTurnOn.addEventListener("click", function () {
//   // get component image
//   document.getElementById("myImage").src =
//     "https://www.w3schools.com/js/pic_bulbon.gif";
// });

// // get button turn off
// const buttonTurnOff = document.querySelector(".buttonTurnOff");

// buttonTurnOff.addEventListener("click", function () {
//   // get component image
//   document.getElementById("myImage").src =
//     "https://www.w3schools.com/js/pic_bulboff.gif";
// });

const buttonSpongebob = document.querySelector(".buttonSpongebob");

buttonSpongebob.addEventListener("click", function () {
  document.getElementById("myImage").src =
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/games/switch/s/spongebob-krusty-cook-off-switch/description-image";
});

const buttonPatrick = document.querySelector(".buttonPatrick");

const myImage = document.getElementById("myImage");
buttonPatrick.addEventListener("click", function () {
  myImage.src =
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/640px-Patrick_Star.svg.png";
});
