let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(this.value);
  return this.value;
});

function getValue() {
  let text = document.getElementsByTagName("input")[0];
  let val = text.value;
  alert(val);
}

// let stringForTest = document.querySelector(".form");
// // function checkInput() {
// stringForTest.addEventListener("submit", function () {
//   value = this.value;
//   console.log(value);
// });

// // }

//checkInput();
//stringForTest.addEventListener("submit", checkInput());

// console.log(`${stringForTest} + !!!`);
// btn.addEventListener("click", checkInput());

// //btn.addEventListener("click", checkInput());