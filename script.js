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

function getResults(playerSelection, computerSelection) {
  // your code here!

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === "rock" && computerSelection === "rock"){
        return "Result: Tie";
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        return "Result: You Lose! Paper beats Rock";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "Result: You Win! Rock beats Scissors";
    } 
    
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "Result: You Win! Paper beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Result: Tie";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "Result: You Lose! Scissors beats Paper";
    }
    
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "Result: You Lose! Rock beats Scissors";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "Result: You Win! Scissors beats Paper";
    } else { //scissors vs scissors
        return "Result: Tie";
    }
}

//let playerSelection = "rock";
//let computerSelection = "rock";

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

const compSelectionDisplay = document.querySelector('.computerSelection');
const result = document.querySelector('.result');

function playRound(e){
    let playerSelection = this.getAttribute('class');
    let computerSelection = getComputerChoice();
    result.textContent = getResults(playerSelection, computerSelection);
    compSelectionDisplay.textContent = "Opponent: " + computerSelection;
}

function game(){
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
 
/*const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/game();