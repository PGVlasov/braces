let input = document.querySelector(".myValidate");
input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});

checkInput = (value) => {
  if (typeof (input.value == "string")) {
    alert(input.value);
  }
};
