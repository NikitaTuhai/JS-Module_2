"use strict";

let userInput;
let numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число:");
  const currentInptut = +userInput;

  if (isNaN(currentInptut) || userInput === "") {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(currentInptut);
  }
} while (userInput !== null);
  
for(let i of numbers){
  total += i;
}

if (total !== 0 && total !== NaN) {
  alert(`Общая сумма чисел равна ${total}`);
}
