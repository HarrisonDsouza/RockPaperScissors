
// computer choice
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors" ];
    return choice[Math.floor(Math.random()*(choice.length))];
    
    
}
getComputerChoice();


//play a round of game



// play 5 rounds
let compPoints = 0;
let playerPoints = 0;

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("Its a draw!");
        console.log(`Your point(s) : ${playerPoints} and Computer point(s) : ${compPoints}`);
    } else if((computerSelection == "paper" && playerSelection == "rock")||(computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        compPoints++;
        console.log(`Your point(s) : ${playerPoints} and Computer point(s) : ${compPoints}`);
    } else{
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerPoints++;
        console.log(`Your point(s) : ${playerPoints} and Computer point(s) : ${compPoints}`);
    }
}


for (let i=1; i <= 5; i++ ){
    console.log(`Round : ${i}`);
    
    // ask for player input
    let playerChoice = prompt("Choose Rock, Paper or Scissors");

    //play round
    let playerSelection = playerChoice.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}`);

    playRound(playerSelection, computerSelection);

}
