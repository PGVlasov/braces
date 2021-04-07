let input1 = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input1.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input.value);
});

function checkInput() {
  let input = input1.value;
  console.log(input.value);
}

btn.addEventListener("click", checkInput());
