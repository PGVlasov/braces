let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  let stringForTest = this.value;
  stringForTest = this.value.replace(/[^\d]/g, "");
  console.log(stringForTest);
  return stringForTest;
});

console.log(stringForTest);

btn.addEventListener("click", checkInput());

function checkInput() {
  console.log("stringForTest");
}

//btn.addEventListener("click", checkInput());
