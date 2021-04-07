let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});
let btn = document.querySelector(".button-order");

checkInput = (value) => {
  if (typeof (input.value == "string")) {
    alert("input.value");
  }
};

btn.addEventListener("click", checkInput());
