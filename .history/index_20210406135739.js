let input = document.querySelector(".myValidate");
let btn = document.querySelector(".button-order");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^)(}{][]})]/g, "");
  console.log(input.value);
});
checkInput = () => {
  console.log("!!!");
};

btn.addEventListener("click", checkInput());
