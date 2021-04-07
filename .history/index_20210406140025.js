let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input.value);
});

function checkInput(value) {
  console.log(input.value);
}

btn.addEventListener("click", checkInput());
