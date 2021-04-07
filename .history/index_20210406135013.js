let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});
let btn = document.querySelector(".button-order");

checkInput = (input) => {
  if (typeof (input.value == "string")) {
    console.log(`${this.value}`);
  }
};

btn.addEventListener("click", checkInput());
