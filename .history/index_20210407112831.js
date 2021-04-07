let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\]\}\)\[\{\(]+/g, "");
  console.log(this.value);
  return this.value;
});

function checkValue() {
  let stringForTest = document.getElementsByTagName("input")[0];
  let val = stringForTest.value;
  console.log(val);
}
