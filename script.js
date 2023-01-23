function getComputerChoice(){
    
    let rand = Math.floor(Math.random() * 3);

    if(rand === 0){
        return "rock";
    } else if(rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
  // your code here!

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === "rock" && computerSelection === "rock"){
        return "Tie";
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors";
    } 
    
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Tie";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper";
    }
    
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper";
    } else { //scissors vs scissors
        return "Tie";
    }
}

let playerSelection = "rock";
let computerSelection = "rock";

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getPlayerSelection));

function getPlayerSelection(e){
    playerSelection = this.getAttribute('class');
}

//const rockbtn = document.querySelector('.rock');
//rockbtn.addEventListener('click', getPlayerSelection);

function game(){
    //console.log("Five Rounds of Rock Paper Scissors:");

    //playerSelection = window.prompt("Make your selection by typing 'rock', 'paper', or 'scissors'.");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

}
 
/*const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/game();