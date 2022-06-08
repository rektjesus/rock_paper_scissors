const arr = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let result;

// Random number generator
function randomNumber(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

// Computers choice using random number generator
function computerPlay(arr) {
    randNum = randomNumber(2);
    computerChoice = arr[randNum];
}

// Function for one round of the game
function round(userChoice, computerChoice) {

    userChoice = prompt("Rock!? Paper!? Scissors!? SHOOT!", "");
    // Make player selection case-insensitive
    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock" && computerChoice === "scissors") {
        result = "Computer chose scissors... You WIN!";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        result = "Computer chose rock... You LOSE!";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        result = "Computer chose rock... You WIN!";
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        result = "Computer chose paper... You LOSE!";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        result = "Computer chose paper... You WIN!";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        result = "Computer chose scissors... You LOSE!";
    }
    else {
        result = "It's a TIE!";
    }

    return result;
}

function game()

computerPlay(arr);
round(userChoice, computerChoice);
console.log(result);