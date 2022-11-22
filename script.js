let random = randomNumber();
let pc = getComputerChoice();
let userChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
let win = `You win! ${userChoice} beats ${pc}!`;
let loss = `You lose... ${pc} beats ${userChoice}`;
let tie = `It's a tie!`;
let wrong = `${userChoice} is not an option!`;

function randomNumber() {
    return Math.floor(Math.random() * 100);
}


function getComputerChoice() {
    if (random < 33) {
        return "rock";
    }
    else if (random < 66) {
        return "paper";
    }
    else if (random < 100) {
        return "scissors";
    }
}

function playRound(userChoice, pc) {
    if (pc === "rock" && userChoice === "paper" || pc === "paper" && userChoice === "scissors" || pc === "scissors" && userChoice === "rock") {
        return win;
    }
    else if (userChoice === "paper" && pc === "scissors" || userChoice === "scissors" && pc === "rock" || userChoice === "rock" && pc === "paper") {
        return loss;
    }
    else if ( userChoice === "rock" && pc === "rock" || userChoice === "paper" && pc === "paper" || userChoice === "scissors" && pc === "scissors") {
        return tie;
    }
    else if (userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors") {
        return wrong;
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound(userChoice, pc);
    }
}