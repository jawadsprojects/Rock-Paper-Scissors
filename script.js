let options = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    return options[randomNumber];
}

// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection
// - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRockPaperScissors(computerSelection,playerSelection){

    if(playerSelection===computerSelection){
        return `it's a tie`;
    }
    else if(playerSelection==="rock" && computerSelection=="paper" || playerSelection==="paper" && computerSelection=="scissors" || playerSelection==="scissors" && computerSelection=="rock"){
        return `computer wins ${computerSelection} beats ${playerSelection}`;
    }
    else{
        return `you win! ${playerSelection} beats ${computerSelection}`;
    }
}



// Write a NEW function called game().
// Use the previous function inside of this one to play a 5 round game
// that keeps score and reports a winner or loser at the end.

function game(){

    for(let i=1;i<6;i++){

        let computerSelection = getComputerChoice();

        let playerSelection = prompt("What is your selection?").toLowerCase();

        console.log(playRockPaperScissors(computerSelection,playerSelection));
    }
}

game();