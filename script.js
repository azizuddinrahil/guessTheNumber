"use strict";

// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'Something';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number given!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Nice one 🥳";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too high 🙄";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose! 🙁";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose! 🙁";
      document.querySelector(".score").textContent = 0;
    }
  }
});
