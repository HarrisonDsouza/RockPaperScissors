
// computer choice
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors" ];
    console.log(choice[Math.floor(Math.random()*(choice.length))]);
    
    
}
getComputerChoice();

// ask for player input
let playerChoice = prompt("Choose Rock, Paper or Scissors");
console.log(playerChoice.toLowerCase());


