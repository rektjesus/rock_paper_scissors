const arr = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;

function randomNumber(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

function computerPlay(arr) {
    randNum = randomNumber(2);
    computerChoice = arr[randNum];
}

computerPlay(arr);
console.log(computerChoice);