const input = document.querySelector(".myValidate");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\]\}\)\[\{\(]+/g, "");
});

const left = "([{";
const right = ")]}";

function checkValue() {
  let stringForTest = document.getElementsByTagName("input")[0];
  let string = stringForTest.value;
  let result = true;
  let stack = [];
  for (let i = 0; i < string.length && result; i++) {
    const brace = string[i];
    if (left.includes(brace)) {
      stack.push(brace);
    } else {
      let leftBrace = stack.pop();
      if (leftBrace == undefined) result = false;
      else if (left.indexOf(leftBrace) != right.indexOf(brace)) {
        result = false;
      }
    }
  }
  if (stack.length) {
    result = false;
  }

  alert(result);
}

// var leftBraces="([{";
// var rightBraces=")]}";

// function checkBraces(braces) {
//   var ok=true;
//   var stack=[];
//   for(var i=0; i<braces.length && ok; i++) {
//     var brace=braces[i];
//     if(leftBraces.includes(brace)) stack.push(brace);
//     else {
//       var leftBrace=stack.pop();
//       if(leftBrace==undefined) ok=false;
//       else if(leftBraces.indexOf(leftBrace)!=rightBraces.indexOf(brace)) ok=false;
//     }
//   }
//   if(stack.length) ok=false;
//   return ok;
// }
