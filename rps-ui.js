let playerScore = 0;
let compScore = 0;
    const rock = document.querySelector('button[value='rock']');
    const paper = document.querySelector('button[value='paper']');
    const scissor = document.querySelector('button[value='scissor']');
    
    
        
    });
    // chooses rock/paper/scissor at random
    function getComputerChoice() {
        const computerPick = ['rock', 'paper', 'scissors']
        return computerPick[Math.floor(Math.random()*computerPick.length)];
    }
    // initiates one round of R.P.S
    function playRound(playerSelection, computerSelection) {
        // turns all input to lowercase so that no error when comparing
        let lowercasePS = playerSelection.toLowerCase();
        let lowercaseCS = computerSelection.toLowerCase();
        // case 1 for tie game
        if (lowercasePS === lowercaseCS) {
            return 'its a tie!';
        } else if (lowercasePS === 'rock' && lowercaseCS === 'scissors') {
            // increment playerScore by 1 if player wins
            playerScore++;
            return 'player wins! player has ' + playerScore + ' points';
        } else if (lowercasePS === 'scissors' && lowercaseCS === 'paper') {
            playerScore++;
            return 'player wins! player has ' + playerScore + ' points';
        } else if (lowercasePS === 'paper' && lowercaseCS === 'rock') {
            playerScore++;
            return 'player wins! player has ' + playerScore + ' points';
        } else {
            // all cases where computer wins, increments compScore by 1
            compScore++;
            return 'computer wins! computer has ' + compScore + ' points';
        }
    }
    // initiates a game of R.P.S, can choose how many rounds to play
    function game () {
        
        // ask for input from player
        const playerSelection = prompt('Choose rock, paper, or scissors');
        // get random computer input from getComputerChoice()
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection,playerScore,compScore));
        }  
    console.log(game());