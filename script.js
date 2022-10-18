
// computer choice
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors" ];
    return choice[Math.floor(Math.random()*(choice.length))];
    
    
}
getComputerChoice();

// ask for player input
let playerChoice = prompt("Choose Rock, Paper or Scissors");

//play a round of game
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("Its a draw!");
    } else if((computerSelection == "paper" && playerSelection == "rock")||(computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else{
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

let playerSelection = playerChoice.toLowerCase();

let computerSelection = getComputerChoice();

console.log(`Computer chose ${computerSelection}`);

playRound(playerSelection, computerSelection);


