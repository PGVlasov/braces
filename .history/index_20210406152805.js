let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(this.value);
  return this.value;
});

let stringForTest = document.querySelector("input");
function checkInput() {
  console.log(typeOf(stringForTest.value));
}
stringForTest.addEventListener("submit", checkInput());

// console.log(`${stringForTest} + !!!`);
// btn.addEventListener("click", checkInput());

// //btn.addEventListener("click", checkInput());
