let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input.value);
});
btn.addEventListener("click", checkInput());

function checkInput() {
  console.log("!!!!");
}

//btn.addEventListener("click", checkInput());
