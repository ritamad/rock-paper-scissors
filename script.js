//determine computer choice
function getComputerChoice() {
    let random = Math.random();
    if(random >= 0 && random <= 0.32) {
        random = `rock`;
    } else if (random >= 0.33 && random <= 0.66) {     //Paper has a higher chance (just 1% more)
        random = `paper`;
    } else {
        random = `scissors`;
    }
    return random;
}


//get human choice 
function getHumanChoice() {
    let humanChoice = prompt(`Your turn! Rock, paper or scissors?`);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


// function to play one round 
function playRound(humanChoice2, computerChoice2) {
    if ((humanChoice2 === `rock` && computerChoice2 === `scissors`) || (humanChoice2 === `paper` && computerChoice2 === `rock`) || (humanChoice2 === `scissors` && computerChoice2 === `paper`)) {
        console.log(`you win!`);
        return `You win!`;
        
    } else if ((humanChoice2 === `rock` && computerChoice2 === `paper`) || (humanChoice2 === `paper` && computerChoice2 === `scissors`) || (humanChoice2 === `scissors` && computerChoice2 === `rock`)) {
        console.log(`you lose!`); 
        return `You lose!`;
        
    } else {
        console.log(`tie!`);
        return `Tie!`;
    }
}


// function to play 5 rounds, increase the score and decide the winner
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++){
        let  resultRound =  playRound(getHumanChoice(), getComputerChoice());
        if(resultRound === `You lose!`) {
            computerScore++;
            console.log(`You lose! Scores: Human ${humanScore} Computer ${computerScore}`);
        }else if(resultRound === `You win!`){
            humanScore++;
            console.log(`You win! Scores: Human ${humanScore} - Computer ${computerScore}`);
        }else{
            console.log(`You tie! Scores: Human ${humanScore} - Computer ${computerScore}`);
        }
    }

    if(humanScore > computerScore ){
        alert(`YOU WON! Scores: Human ${humanScore} Computer ${computerScore}`);
    }else if(humanScore < computerScore){
        alert(`YOU LOST! Scores: Human ${humanScore} Computer ${computerScore}`);
    }else{
        alert(`DRAW! Scores: Human ${humanScore} Computer ${computerScore}`);
    }

}

playGame();


