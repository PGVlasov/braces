checkInput = () => {
  console.log("!!!");
};

let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input.value);
});
let btn = document.querySelector(".button-order");

btn.addEventListener("click", checkInput());
