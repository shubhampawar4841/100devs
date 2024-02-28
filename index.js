function replit(str, start, end) {
  console.log("original string is", str);
  console.log("new string", str.slice(start, end));
}
replit("shubhampawar", 4, 8);

var slice = "johncena";
let ans = slice.slice(2, 5);
console.log(ans);

const ans5 = "shubham";
let ans2 = ans5.replace("shu", "kane");
console.log(ans2);

const ans4 = ans5.split("");
const ans6 = ans5.split("h");
console.log(ans4);
console.log(ans6);
console.log(ans5.toUpperCase());

function parse(str) {
  console.log("original valur", str);
  let temp = parseInt(str);
  console.log("after value", temp);
}
function floor(str) {
  console.log("original valur", str);
  let temp = parseInt(str);
  console.log("after value", floor);
}
console.log(parseFloat("3.14"));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1.concat(array2));

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}
let date = new Date();
console.log(date);
