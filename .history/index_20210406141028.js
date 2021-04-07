let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input.value);
});

let stringForTest = input.value;

btn.addEventListener("click", checkInput());

function checkInput() {
  console.log(stringForTest);
}

//btn.addEventListener("click", checkInput());
