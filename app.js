var firstName = "temo";
var secondName = "maglakelidze";

var fullName = firstName + secondName;

var uppercaseFullName = fullName.toUpperCase();

console.log(uppercaseFullName);

let number = [];

for (var i = 1; i <= 100; i++) {
  number.push(i);
}
number.sort(function (a, b) {
  return b - a;
});

console.log(number);

let smallNumber = [1, 2, 3, 4, 5];

let firstNumber = smallNumber.push;
console.log(smallNumber);
