let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "123");
  console.log(this.value);
  return this.value;
});

let stringForTest = document.querySelector(".form").value;
// function checkInput() {
stringForTest.addEventListener("submit", function () {
  console.log(this.value);
});

// }

//checkInput();
//stringForTest.addEventListener("submit", checkInput());

// console.log(`${stringForTest} + !!!`);
// btn.addEventListener("click", checkInput());

// //btn.addEventListener("click", checkInput());