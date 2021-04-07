let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(this.value);
  return this.value;
});

let stringForTest = document.querySelector(".myValidate").value;
// function checkInput() {
console.log("stringForTest");
// }

//checkInput();
//stringForTest.addEventListener("submit", checkInput());

// console.log(`${stringForTest} + !!!`);
// btn.addEventListener("click", checkInput());

// //btn.addEventListener("click", checkInput());
