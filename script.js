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

let playerWins = 0;
let computerWins = 0;

function getResults(playerSelection, computerSelection) {
  // your code here!

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === "rock" && computerSelection === "rock"){
        return "Result: Tie";
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        computerWins++
        return "Result: You Lose! Paper beats Rock";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerWins++;
        return "Result: You Win! Rock beats Scissors";
    } 
    
    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerWins++;
        return "Result: You Win! Paper beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Result: Tie";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerWins++
        return "Result: You Lose! Scissors beats Paper";
    }
    
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerWins++
        return "Result: You Lose! Rock beats Scissors";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerWins++;
        return "Result: You Win! Scissors beats Paper";
    } else { //scissors vs scissors
        return "Result: Tie";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

const compSelectionDisplay = document.querySelector('.computerSelection');
const result = document.querySelector('.result');

const playerWinDisplay = document.querySelector('.playerWins');
const computerWinDisplay = document.querySelector('.computerWins');


function playRound(e){
    let playerSelection = this.getAttribute('class');
    let computerSelection = getComputerChoice();
    result.textContent = getResults(playerSelection, computerSelection);
    compSelectionDisplay.textContent = "Opponent: " + computerSelection;
    playerWinDisplay.textContent = "Player Win Count: " + playerWins;
    computerWinDisplay.textContent = "Computer Win Count: " + computerWins;
}

function game(){
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
 
/*const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/game();