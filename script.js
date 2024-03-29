const para = document.querySelector('.para');

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

    const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    resetGame();
});    

const score = document.querySelector('#score');
score.textContent = `You: 0 || Com: 0 || Tie: 0`;
const results = document.querySelector('#results');
const final = document.querySelector('#final');

let pc = '';
let userScore = 0;
let comScore = 0;
let tieScore = 0;

//This function will compare the player's choice and the computer's choice, then score results.//
function playRound(userChoice) {
    pc = getComputerChoice();
    if(userScore < 5 && comScore < 5){
    if (pc === "Rock" && userChoice === "Paper" || pc === "Paper" && userChoice === "Scissors" || pc === "Scissors" && userChoice === "Rock") {
        userScore++;
        score.textContent = `You: ${userScore} || Com: ${comScore} || Tie: ${tieScore}`;
        results.textContent = `Win: ${userChoice} beats ${pc}!`;
        para.style.backgroundColor = "#97cba9";
        endGame();
    }

    else if (userChoice === "Paper" && pc === "Scissors" || userChoice === "Scissors" && pc === "Rock" || userChoice === "Rock" && pc === "Paper") {
        comScore++;
        score.textContent = `You: ${userScore} || Com: ${comScore} || Tie: ${tieScore}`;
        results.textContent = `Lose: ${pc} beats ${userChoice}...`;
        para.style.backgroundColor = "#d64161";
        endGame();
    }

    else if ( userChoice == pc) {
        tieScore++;
        score.textContent = `You: ${userScore} || Com: ${comScore} || Tie: ${tieScore}`;
        results.textContent = `It's a tie!`;
        para.style.backgroundColor = "rgb(216, 214, 214)";
        }}
}

//This function will compare scores// 
function endGame() {
    if (userScore > 4 && comScore < 5) {
        final.textContent = "Game Over!" + "\n" + `You win ${userScore} to ${comScore}!`;
    }
    else if (comScore > 4 && userScore < 5) {
        final.textContent = "Game Over..." + '\n' +`You lose ${comScore} to ${userScore}!`;
    }
}

//Helper Functions//
function resetGame() {
    score.textContent = `You: 0 || Com: 0 || Tie: 0`;
    final.textContent = 'Choose your Option!';
    results.textContent = '';
    para.style.backgroundColor = "rgb(216, 214, 214)";
    comScore = 0;
    userScore = 0;
    tieScore = 0;
}

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