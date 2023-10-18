let playerScore = 0;
let compScore = 0;
const rock = document.querySelector('button[value="rock"]');
const paper = document.querySelector('button[value="paper"]');
const scissor = document.querySelector('button[value="scissor"]');
const result = document.querySelector('#result');
    
rock.addEventListener('click',function(){
    playRound(`${rock.value}`);
});
paper.addEventListener('click',function(){
    playRound(`${paper.value}`);
});
scissor.addEventListener('click',function(){
    playRound(`${scissor.value}`);
}); 
// chooses rock/paper/scissor at random
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
            return result.textContent = 'player wins! player has points';
        } else if (lowercasePS === 'scissors' && lowercaseCS === 'paper') {
            playerScore++;
            return result.textContent = 'player wins! player has points';
        } else if (lowercasePS === 'paper' && lowercaseCS === 'rock') {
            playerScore++;
            return result.textContent = 'player wins! player has points';
        } else {
            // all cases where computer wins, increments compScore by 1
            compScore++;
            return result.textContent = 'computer wins! computer has points';
        }
    }