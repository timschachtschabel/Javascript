// When the user inputs an option
// CPU also returns a random option between rock, paper and scissors
//program checks who wins 
//return a message if you win or lose

const options = ["rock", "paper", "scissors"]

let humanScore = 0;
let computerScore = 0;

window.onload = function pageLoaded() {
    playGame()
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    return options[randomNumber];
}

function getHumanChoice() {
    const humanChoice = prompt("rock, paper or scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("You both chose rock. Nobody gets points")
        }
        else if (computerChoice == "paper") {
            console.log("You lose this round. Paper beats rock");
            computerScore++;
        }
        else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors")
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else if (computerChoice == "paper") {
            console.log("You both chose paper. Nobody gets points");
        }
        else if (computerChoice == "scissors") {
            console.log("You lose this round. Scissors beats paper")
            computerScore++;
        }
    } else if(humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose this round. Rock beats scissors");
            computerScore++;
        }
        else if (computerChoice == "paper") {
            console.log("You win! scissors beats paper")
            humanScore++;
        }
        else if(computerChoice == "scissors") {
            console.log("You both chose scissors. Nobody gets points");
        }
    }
}

function playGame() {
    //Game needs to go for 5 rounds
    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose. Better luck next time");
    }
}