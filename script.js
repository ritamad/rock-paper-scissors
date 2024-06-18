//determine computer choice
function getComputerChoice() {
    let random = Math.random();
    if(random >= 0 && random <= 0.32) {
        random = "Rock";
    } else if (random >= 0.33 && random <= 0.66) {     //Paper has a higher chance (just one more)
        random = "Paper";
    } else {
        random = "Scissors";
    }
    return random;
}

//get human choice 
function getHumanChoice() {
    let humanChoice = prompt("Your turn! Rock, paper or scissors?");
    return humanChoice;
}

