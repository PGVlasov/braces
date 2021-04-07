const input = document.querySelector(".myValidate");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\]\}\)\[\{\(]+/g, "");
});

const leftBraces = "([{";
const rightBraces = ")]}";

function checkValue() {
  let stringForTest = document.getElementsByTagName("input")[0];
  let string = stringForTest.value;
  let result = true;
  let stack = [];
  for (let i = 0; i < string.length && result; i++) {
    const brace = string[i];
    if (leftBraces.includes(brace)) {
      stack.push(brace);
    } else {
      let leftBrace = stack.pop();
      if (leftBrace == undefined) result = false;
      else if (leftBraces.indexOf(leftBrace) != rightBraces.indexOf(brace)) {
        result = false;
      }
    }
  }
  if (stack.length) {
    result = false;
  }

  alert(result);
}
