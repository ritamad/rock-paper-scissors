//determine computer choice
function getComputerChoice() {
    let random = Math.random();
    if(random >= 0 && random <= 0.32) {
        random = "rock";
    } else if (random >= 0.33 && random <= 0.66) {     //Paper has a higher chance (just 1% more)
        random = "paper";
    } else {
        random = "scissors";
    }
    return random;
}


//get human choice 
function getHumanChoice() {
    let humanChoice = prompt("Your turn! Rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

// score variables
let humanScore = 0;
let computerScore = 0;


// function to play a single round
function playRound(humanChoice2, computerChoice2) {
    if ((humanChoice2 === "rock" && computerChoice2 === "scissors") || (humanChoice2 === "paper" && computerChoice2 === "rock") || (humanChoice2 === "scissors" && computerChoice2 === "paper")) {
        console.log(`you win! ${humanChoice2} beats ${computerChoice2}`);
        humanScore += 1;
    } else if ((humanChoice2 === "rock" && computerChoice2 === "paper") || (humanChoice2 === "paper" && computerChoice2 === "scissors") || (humanChoice2 === "scissors" && computerChoice2 === "rock")) {
        console.log(`you lose! ${computerChoice2} beats ${humanChoice2}`);
        computerScore += 1;
    } else {
        console.log("tie!");
    }
  }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`Computer choice is: ${computerSelection}`);

playRound(humanSelection, computerSelection);
