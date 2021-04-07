const input = document.querySelector(".myValidate");

input.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\]\}\)\[\{\(]+/g, "");
  console.log(this.value);
  return this.value;
});

const leftB = "([{";
const right = ")]}";

function checkValue() {
  let stringForTest = document.getElementsByTagName("input")[0];
  let braces = stringForTest.value;
  let result = true;
  let arr = [];
  for(let i=0; i<val.length && result; i++) {
const brace=braces[i];
  //     if(leftBraces.includes(brace)) arr.push(brace);
  //     else {
  //       var leftBrace=arr.pop();
  //       if(leftBrace==undefined) result=false;
  //       else if(leftBraces.indexOf(leftBrace)!=rightBraces.indexOf(brace)) result=false;
  //     }
  //   }
  //   if(stack.length) result=false;
  //   return result;
  console.log(brace);
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
