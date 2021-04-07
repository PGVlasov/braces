let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});
let btn = document.querySelector(".button-order");

btn.addEventListener("click", checkInput());

checkInput = (value) => {
  if (typeof (input.value == "string")) {
    alert(input.value);
  }
};
