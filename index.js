"use strict";

let userInput;
const numbers = [];
let total = 0;

while (userInput !== null && userInput !== 0) {
  userInput = +prompt("Введите число:");

  if (isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(userInput);
  }
}

for (let i = 0, max = numbers.length; i < max; i++) {
  total += numbers[i];
}
if (total !== 0 && total !== NaN) {
  alert(`Общая сумма чисел равна ${total}`);
}
