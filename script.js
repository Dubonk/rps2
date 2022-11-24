//computer was getting a random value but because it was declared in the global scope, the value stayed the same in the function game()//
let pc = '';
let win;
let loss; 
let tie = `It's a tie!`;
let wrong;
let userScore = 0;
let comScore = 0;


//This function will randomly return 'rock paper or scissors'//
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1;

    if (ranNum == 1) {
        return "rock";
    }
    else if (ranNum == 2) {
        return "paper";
    }
    else if (ranNum == 3) {
        return "scissors";
    }
}

//This function will compare the player's choice and the computer's choice, then return win, loss. tie or error for spelling.//
function playRound() {
    pc = getComputerChoice();
    let userChoice = prompt("Rock, Paper, Scissors?").toLowerCase(); 

    if (pc === "rock" && userChoice === "paper" || pc === "paper" && userChoice === "scissors" || pc === "scissors" && userChoice === "rock") {
        userScore++;
        console.log(`You win! ${userChoice} beats ${pc}!`);
        console.log(`You: ${userScore}, COM: ${comScore}`);
        return win;
    }

    else if (userChoice === "paper" && pc === "scissors" || userChoice === "scissors" && pc === "rock" || userChoice === "rock" && pc === "paper") {
        comScore++;
        console.log(`You lose! ${pc} beats ${userChoice}...`);
        console.log(`You: ${userScore}, COM: ${comScore}`);
        return loss;
    }

    else if ( userChoice == pc) {
        console.log(`It's a tie!`);
        console.log(`You: ${userScore}, COM: ${comScore}`);
        return tie;
    }

    else if (userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors") {
        console.log(`${userChoice}?`);
        return wrong;
    }
}

//This function will compare scores and console log it.// 
function endGame() {
    if (userScore > comScore) {
        console.log(`Game Over! You win ${userScore} to ${comScore}`);
    }
    else if (comScore > userScore) {
        console.log(`Game Over... You lose ${comScore} to ${userScore}`);
    }
}

//Simple loop that will end the game if either player reaches 5, or continue the game.//
function game() {
    
    for (let i = 0; i < 5; i++) {
        if (userScore == 5 || comScore == 5) {
            endGame();
        }
        else {
            i--;
            playRound();
        }
    
    }
}


game();
