// variables to keep track of player and comp points
let playerScore = 0;
let compScore = 0;

// variable for each selection
const rock = document.querySelector('button[value="rock"]');
const paper = document.querySelector('button[value="paper"]');
const scissors = document.querySelector('button[value="scissors"]');
// variables for current result
const result = document.querySelector('#result');
// variable for final result to X amount of pts
const finalResult = document.querySelector('#finalResult');
const reset = document.querySelector('#reset');

//refresh page for new game
reset.addEventListener('click',() => location.reload());

// linking selector buttons to playRound()
rock.addEventListener('click',function(){
    playRound(`${rock.value}`);
    getScore();
});
paper.addEventListener('click',function(){
    playRound(`${paper.value}`);
    getScore();
});
scissors.addEventListener('click',function(){
    playRound(`${scissors.value}`);
    getScore();
}); 

// chooses rock/paper/scissors at random
function getComputerChoice() {
    const computerPick = ['rock', 'paper', 'scissors']
    return computerPick[Math.floor(Math.random()*computerPick.length)];
}
// initiates one round of R.P.S
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    // turns all input to lowercase so that no error when comparing
    let lowercasePS = playerSelection.toLowerCase();
    let lowercaseCS = computerSelection.toLowerCase();
    // case 1 for tie game
    if (lowercasePS === lowercaseCS) {
        return result.textContent = "It's a tie";
    } else if (lowercasePS === 'rock' && lowercaseCS === 'scissors') {
        // increment playerScore by 1 if player wins
        playerScore++;
        return result.textContent = 'player wins! Rock beats scissors';
    } else if (lowercasePS === 'scissors' && lowercaseCS === 'paper') {
        playerScore++;
        return result.textContent = 'player wins! Scissors beats paper';
    } else if (lowercasePS === 'paper' && lowercaseCS === 'rock') {
        playerScore++;
        return result.textContent = 'player wins! Paper beats rock';
    } else {
        // all cases where computer wins, increment compScore by 1
        compScore++;
        return result.textContent = `computer wins! ${lowercaseCS} beat ${lowercasePS}`;
    }
}

// checks score after 5 points
function getScore() {
    finalResult.textContent = `Player Score: ${playerScore} Computer Score: ${compScore}`;
    if (playerScore === 5) {
        return finalResult.textContent = `You Won ${playerScore} : ${compScore}`; 
    } else if (compScore === 5) {
        return finalResult.textContent = `You Lose ${playerScore} : ${compScore}`;
    }
}