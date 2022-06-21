const arr = ["rock", "paper", "scissors"];
let botChoice;
let userChoice;
let result;
let resultBot = 0;
let resultUser = 0;
let scoreCount = 0;

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
};

// Computers choice using random number generator

function computerPlay(array) {
    randNum = randomNumber(2);
    botChoice = array[randNum];
    return botChoice;
};

// Function to update UI

function updateInterface(userChoice, botChoice) {
    img1.src = `./img/${userChoice}.svg`;
    img2.src = `./img/${botChoice}.svg`;
    userOutput.appendChild(img1);
    botOutput.appendChild(img2);
    userOutput.id = "user_output_active";
    botOutput.id = "bot_output_active";
}

// Function for one round of the game

function round(userChoice, botChoice) {

    if (userChoice === "rock" && botChoice === "scissors") {
        result = "win";
        resultUser++;
        winner.textContent = "YOU WIN THIS ROUND";
        scoreUser.textContent = resultUser;
    }
    else if (userChoice === "scissors" && botChoice === "rock") {
        result = "lose";
        resultBot++;
        winner.textContent = "YOU LOSE THIS ROUND";
        scoreBot.textContent = resultBot;
    }
    else if (userChoice === "paper" && botChoice === "rock") {
        result = "win";
        resultUser++;
        winner.textContent = "YOU WIN THIS ROUND";
        scoreUser.textContent = resultUser;
    }
    else if (userChoice === "rock" && botChoice === "paper") {
        result = "lose";
        resultBot++;
        winner.textContent = "YOU LOSE THIS ROUND";
        scoreBot.textContent = resultBot;
    }
    else if (userChoice === "scissors" && botChoice === "paper") {
        result = "win";
        resultUser++;
        winner.textContent = "YOU WIN THIS ROUND";
        scoreUser.textContent = resultUser;
    }
    else if (userChoice === "paper" && botChoice === "scissors") {
        result = "lose";
        resultBot++;
        winner.textContent = "YOU LOSE THIS ROUND";
        scoreBot.textContent = resultBot;
    }
    else {
        result = "tie";
        winner.textContent = "THIS ROUND WAS A TIE";
    }

    console.log(result);
    return result;
};

// Function to play 5 games, unless its a tie, then more games have to be played until 5 wins occur

function game() {
    if (scoreCount >= 4) {
        if (resultBot > resultUser) {
            winner.textContent = "YOU LOST AGAINST A COMPUTER, WHAT A LOSER";
        }
        else if (resultBot < resultUser) {
            winner.textContent = "YOU WON! CONGRATULATIONS!";
        }
        else {
            winner.textContent = "IT'S A TIE!";
        }
    }
    else {
        scoreCount++;
    }
};

// Event listeners for each button

rockBtn.addEventListener("click", function () {
    userChoice = "rock";
    computerPlay(arr);
    round(userChoice, botChoice);
    game();
    updateInterface(userChoice, botChoice)
});
paperBtn.addEventListener("click", function () {
    userChoice = "paper";
    computerPlay(arr);
    round(userChoice, botChoice);
    game();
    updateInterface(userChoice, botChoice)
});
scissorsBtn.addEventListener("click", function () {
    userChoice = "scissors";
    computerPlay(arr);
    round(userChoice, botChoice);
    game();
    updateInterface(userChoice, botChoice)
});