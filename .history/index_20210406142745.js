let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(this.value);
  return this.value;
});

let stringForTest = document.querySelector(".myValidate");
stringForTest.addEventListener("submit", checkInput(stringForTest));
function checkInput() {
  console.log("stringForTest");
}
console.log(`${stringForTest} + !!!`);
btn.addEventListener("click", checkInput());

//btn.addEventListener("click", checkInput());
