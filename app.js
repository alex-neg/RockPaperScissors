"use strict"

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");
const posssibleChoices = document.querySelectorAll("button");
let userChoice;

posssibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
}));