let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});
let btn = document.querySelector(".button-order");

checkInput = (value) => {
  if (typeof (this.value == "string")) {
    console.log(`${this.value}`);
  }
};

btn.addEventListener("click", checkInput());
