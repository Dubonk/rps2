const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
    playRound('Rock');
    });

const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playRound('Paper');
    })

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playRound('Scissors');
    })




//computer was getting a random value but because it was declared in the global scope, the value stayed the same in the function game()//

let pc = '';
let win;
let loss; 
let tie = `It's a tie!`;
let wrong;
let userScore = 0;
let comScore = 0;
let tieScore = 0;


//This function will randomly return 'rock paper or scissors'//
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1;

    if (ranNum == 1) {
        return "Rock";
    }
    else if (ranNum == 2) {
        return "Paper";
    }
    else if (ranNum == 3) {
        return "Scissors";
    }
}

//This function will compare the player's choice and the computer's choice, then return win, loss. tie or error for spelling.//
function playRound(userChoice) {
    pc = getComputerChoice();
    if(userScore < 5 && comScore < 5){
    if (pc === "Rock" && userChoice === "Paper" || pc === "Paper" && userChoice === "Scissors" || pc === "Scissors" && userChoice === "Rock") {
        ++userScore;
        score.textContent = `You: ${userScore} || COM: ${comScore} || Tie: ${tieScore}`;
        results.textContent = `${userChoice} beats ${pc}!`;
    }

    else if (userChoice === "Paper" && pc === "Scissors" || userChoice === "Scissors" && pc === "Rock" || userChoice === "Rock" && pc === "Paper") {
        ++comScore;
        score.textContent = `You: ${userScore} || COM: ${comScore} || Tie: ${tieScore}`;
        results.textContent = `${pc} beats ${userChoice}...`;
    }

    else if ( userChoice == pc) {
        ++tieScore;
        score.textContent = `You: ${userScore} || COM: ${comScore} || Tie: ${tieScore}`;
        results.textContent = `It's a tie!`;
        
    }}
    else {
        endGame();
    }
    
}

//This function will compare scores and console log it.// 
function endGame() {
    if (userScore > comScore) {
        final.textContent = "Game Over!" + "\n" + `You win ${userScore} to ${comScore}`;
    }
    else if (comScore > userScore) {
        final.textContent = "Game Over..." + '\n' +`You lose ${comScore} to ${userScore}`;
    }
}

function resetGame() {
    score.textContent = `You: 0 || COM: 0 || Tie: 0`;
    final.textContent = '';
    results.textContent = '';
    comScore = 0;
    userScore = 0;
    tieScore = 0;
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    resetGame();
});    

const score = document.querySelector('#score');
score.textContent = `You: 0 || COM: 0 || Tie: 0`;
const results = document.querySelector('#results');
const final = document.querySelector('#final');


