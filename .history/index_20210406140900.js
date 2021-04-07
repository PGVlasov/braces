let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  //btn.addEventListener("click", checkInput());
  console.log(input.value);
});

function checkInput() {
  console.log("!!!!");
}

//btn.addEventListener("click", checkInput());
