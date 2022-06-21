const arr = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let result;
let resultComputer = 0;
let resultUser = 0;

// HTML elements
const head = document.querySelector("h3");
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const winner = document.querySelector("#winner");
const userOutput = document.querySelector("#user_output");
const botOutput = document.querySelector("#bot_output");
const scoreUser = document.querySelector(".score_user");
const scoreBot = document.querySelector(".score_bot");
let img1 = document.createElement("img");
let img2 = document.createElement("img");

// Random number generator
function randomNumber(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

// Computers choice using random number generator
function computerPlay(array) {
    randNum = randomNumber(2);
    computerChoice = array[randNum];
    return computerChoice;
}

// Function for one round of the game
function round(userChoice, computerChoice) {

    if (userChoice === "rock" && computerChoice === "scissors") {
        result = "win";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        result = "lose";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        result = "win";
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        result = "lose";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        result = "win";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        result = "lose";
    }
    else {
        result = "tie";
    }

    console.log(result);
    return result;
}

// Function to play 5 games, unless its a tie, then more games have to be played until 5 wins occur

function game() {
    for (i = 0; i < 5; i++) {

        if (result === "win") {

            resultUser++;
            scoreUser.textContent = resultUser;

        }
        else if (result === "lose") {

            resultComputer++;
            scoreBot.textContent = resultComputer;

        }

        console.log(result);
        console.log("Your score is: " + resultUser + " Computers score is: " + resultComputer);
    }

    // Show FINAL result of who won the best out of 5 game
    if (resultComputer > resultUser) {
        console.log("YOU LOST TO A COMPUTER IDIOT");
    }
    else if (resultComputer < resultUser) {
        console.log("YOU WON THE PRIZE, CONGRATS!");
    }
    else {
        console.log("NOBODY WINS LOL");
    }
}

game();