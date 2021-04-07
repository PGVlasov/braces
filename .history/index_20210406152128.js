let input = document.querySelector(".myValidate");
let btn = document.querySelectorAll("input");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(this.value);
  return this.value;
});

let stringForTest = document.querySelector(".myValidate");
function checkInput() {
  console.log(this.value);
}
stringForTest.addEventListener("submit", checkInput());

// console.log(`${stringForTest} + !!!`);
// btn.addEventListener("click", checkInput());

// //btn.addEventListener("click", checkInput());
