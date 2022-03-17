"use strict";

// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'Something';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Max Score is 20
//document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number given!";
    //If there is no number given
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Nice one 🥳";
    //If the user has the right guess
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too high 🙄";
      score = score - 1;
      //If the user has wrong guess(Higher guess)
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose! 🙁";
      //If the user lost
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too low";
      //If the user has wrong guess(Low guess)
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose! 🙁";
      //If the user lost
      document.querySelector(".score").textContent = 0;
    }
  }
});
