

// computer choice

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors" ];
    return choice[Math.floor(Math.random()*(choice.length))];
}

// set player selection

function optionName(opt){
    if(opt.className == "option-1"){
        return "rock"
    } else if (opt.className == "option-2"){
        return "paper";
    }else {
        return "scissors";
    }
}









const compPointsCount  = document.querySelector('.game-section .computer-points h1');
const playerPointsCount  = document.querySelector('.game-section .player-points h1');
const roundInfo =  document.createElement('p');
function playRound(playerSelection, computerSelection){

    document.querySelector('.game-section .round-info').appendChild(roundInfo);
    if(playerSelection == computerSelection){
        roundInfo.textContent = "Its a draw!";
    } else if((computerSelection == "paper" && playerSelection == "rock")||(computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
        compPoints++;
        if(compPoints == 5 && playerPoints < 5){
            alert("computer wins");
            return;
        }
        roundInfo.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        compPointsCount.textContent = compPoints;
    } else{
        playerPoints++;
        if(playerPoints == 5 && compPoints < 5){
            alert("you win");
            return;
        }
        roundInfo.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerPointsCount.textContent = playerPoints;
    }

    document.querySelector('.game-section > h3').textContent = "First to score 5 points wins";

}


let compPoints = 0;
let playerPoints = 0;



let options = document.querySelectorAll('.options > div');
options.forEach(option => {
    option.addEventListener('click', () => playRound(optionName(option.className), getComputerChoice()));
});








    








