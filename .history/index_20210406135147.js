let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  console.log(input);
});
let btn = document.querySelector(".button-order");

checkInput = (input) => {
  console.log(`${input.innerHTMl}`);
};

btn.addEventListener("click", checkInput());
