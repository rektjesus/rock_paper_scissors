const arr = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let result;
let resultComputer = 0;
let resultUser = 0;

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

    //userChoice = prompt("Rock!? Paper!? Scissors!? SHOOT!", "");

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

// Function to play 5 games, unless its a tie, then more games have to be played until 5 wins occur
function game() {
    for (i = 0; i < 5; i++) {

        computerPlay(arr);
        round(userChoice, computerChoice);

        if (result === "Computer chose scissors... You WIN!" || result === "Computer chose rock... You WIN!" || result === "Computer chose paper... You WIN!") {

            resultUser++;

        }
        else if (result === "Computer chose rock... You LOSE!" || result === "Computer chose paper... You LOSE!" || result === "Computer chose scissors... You LOSE!") {

            resultComputer++;

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