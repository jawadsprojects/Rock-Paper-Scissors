let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    // resultDiv.append(options[randomNumber])
    return options[randomNumber];
}


// selecting the result-div and score div
let resultDiv = document.querySelector(".result-div");
let scoreDiv = document.querySelector(".score-div");

// Defining computer/player scores
let computerScore = 0;
let playerScore = 0;
let maxScore = 5;
let gameOver = false;


function playRockPaperScissors(computerSelection, playerSelection) {
    if (gameOver) {
        return;
    }
    if (computerScore === maxScore) {
        resultDiv.textContent = `----------COMPUTER WINS--------------`
        gameOver = true;
    }
    if (playerScore === maxScore) {
        resultDiv.textContent = `----------PLAYER WINS--------------`
        gameOver = true;
    }
    if (computerScore === maxScore || playerScore === maxScore) {
        return;
    }
    else {
        if (playerSelection === computerSelection) {
            resultDiv.textContent = `it's a tie`;
            scoreDiv.textContent = `${computerScore}:${playerScore}`
            return;
        }
        else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            resultDiv.textContent = `computer wins ${computerSelection} beats ${playerSelection} the current score is ${computerScore}:${playerScore}`;
            scoreDiv.textContent = `${computerScore}:${playerScore}`
            return;
        }
        else {
            playerScore += 1;
            resultDiv.textContent = `you win! ${playerSelection} beats ${computerSelection} the current score is ${computerScore}:${playerScore}`;
            scoreDiv.textContent = `${computerScore}:${playerScore}`
            return;
        }
    }
}


// selecting images and assigning them to variables.
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');



// adding click event listners.
rock.addEventListener("click", function () {
    playRockPaperScissors(getComputerChoice(), 'rock');
})

paper.addEventListener("click", function () {
    playRockPaperScissors(getComputerChoice(), 'paper');

})

scissors.addEventListener("click", function () {
    playRockPaperScissors(getComputerChoice(), 'scissors');
})