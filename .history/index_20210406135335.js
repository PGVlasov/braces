let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input);
  input.preventDefault;
});
let btn = document.querySelector(".button-order");

checkInput = () => {
  console.log("!!!");
};

btn.addEventListener("click", checkInput());
