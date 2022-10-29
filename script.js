

// computer choice

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors" ];
    return choice[Math.floor(Math.random()*(choice.length))];
}

// get player choice

function optionName(opt){
    if(opt.className == "option-1"){
        return "rock"
    } else if (opt.className == "option-2"){
        return "paper";
    }else {
        return "scissors";
    }
}



// play 1 round
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("Its a draw!");
        console.log(`Your point(s) : ${playerPoints} and Computer point(s) : ${compPoints}`);
    } else if((computerSelection == "paper" && playerSelection == "rock")||(computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
        compPoints++;
        if(compPoints == 5 && playerPoints <= 5){
            alert("computer wins");
            return;
        }
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        console.log(`Your point(s) : ${playerPoints} and Computer point(s) : ${compPoints}`);
    } else{
        playerPoints++;
        if(playerPoints == 5 && compPoints <= 5){
            alert("you win");
            return;
        }
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        console.log(`Your point(s) : ${playerPoints} and Computer point(s) : ${compPoints}`);
    }
}

// Result of game
function result(){
    if(compPoints == 5 && playerPoints <= 5){
        alert("computer wins");
    }else alert("you win");
}

//play continuous until one reaches 5 points

let compPoints = 0;
let playerPoints = 0;



let options = document.querySelectorAll('.options > div');
options.forEach(option => {
    option.addEventListener('click', () => playRound(optionName(option.className), getComputerChoice()));
});








    








