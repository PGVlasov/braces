let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input.value);
});

function checkInput() {
  console.log(input.innerHTML);
}

btn.addEventListener("click", checkInput());
