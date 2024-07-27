
//determine computer choice
function getComputerChoice() {
    let random = Math.random();
    if(random >= 0 && random <= 0.32) {
        return  `ROCK`;
    } else if (random >= 0.33 && random <= 0.66) {     //Paper has a higher chance (just 1% more)
        return  `PAPER`;
    } else {
        return  `SCISSORS`;
    }
    
}

// function to play one round 
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === `ROCK` && computerChoice === `SCISSORS`) || 
        (humanChoice === `PAPER` && computerChoice === `ROCK`) || 
        (humanChoice === `SCISSORS` && computerChoice === `PAPER`)) {
        return `You win!`;
        
    } else if ((humanChoice === `ROCK` && computerChoice === `PAPER`) || 
               (humanChoice === `PAPER` && computerChoice === `SCISSORS`) ||
               (humanChoice === `SCISSORS` && computerChoice === `ROCK`)) { 
        return `You lose!`;
        
    } else {
        return `Tie!`;
    }
}


let humanScore = 0;
let computerScore = 0;


// function to update scores in the DOM
function updateScores() {
    const humanScoreElement = document.querySelector('.human-score');
    const computerScoreElement = document.querySelector('.computer-score');
    
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}


// function to play 1 round
 function playGame(humanChoice) {

  
        const computerChoice = getComputerChoice();
        const computerChoiceElement = document.querySelector('#computer-choice');
        computerChoiceElement.textContent = computerChoice;
        const resultRound = playRound(humanChoice, computerChoice);
        if (resultRound === 'You lose!') {
            computerScore++;
        } else if (resultRound === 'You win!') {
            humanScore++;
        }

        updateScores();
        checkFinalResult();
    }

    // function to check final result 
    function checkFinalResult() {
    const finalResult = document.querySelector('#final-result');
    const finalScores = document.querySelector('#final-scores');

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            finalResult.textContent = `YOU WON!`;
            finalScores.textContent = `Final Scores: Human ${humanScore} - Computer ${computerScore}`;
        } else if (humanScore < computerScore) {
            finalResult.textContent = `YOU LOST!`;
            finalScores.textContent = `Final Scores: Human ${humanScore} - Computer ${computerScore}`;
        } else {
            finalResult.textContent = `DRAW!`;
            finalScores.textContent = `Final Scores: Human ${humanScore} - Computer ${computerScore}`;
        }
        // reset scores after 5 points
        humanScore = 0;
        computerScore = 0;
        updateScores();
    }
}



 //event listener for buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.id.toUpperCase();
        playGame(humanChoice);
       
    });
    
});



