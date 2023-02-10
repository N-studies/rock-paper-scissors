function randInt(max) {
  return Math.floor(Math.random() * max); // returns random number between 0 and max-1
}

function getComputerChoice() {
  return options[randInt(3)];
}

const options = ["rock", "paper", "scissors"];

let playerSelection = prompt("rock, paper or scissors?").toLowerCase();

let computerChoice = getComputerChoice();

function playRound(playerSelection, computerChoice) {
  
  if (
    (playerSelection == "rock" && computerChoice == "scissors") ||
    (playerSelection == "paper" && computerChoice == "rock") ||
    (playerSelection == "scissors" && computerChoice == "paper")
  ) {
    return "you win!";
  } else if (playerSelection == computerChoice) {
    return "tie!";
  } else {
    return "you lose!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
   
  for (let i = 1; i < 5; i++) {
    let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
    if (playRound(playerSelection, computerChoice) == "you win!") {
      playerScore++;
    } else if (playRound(playerSelection, computerChoice) == "you lose!") {
      computerScore++;
    }
    else {
        playerScore++
        computerScore++
    }
    
  }
  if (playerScore > computerScore) {
    return `Your score is ${playerScore}, the computer scored ${computerScore}. You win! ${playerScore-computerScore} ties`;
  } else if (playerScore == computerScore) {
    return `Your score is ${playerScore}, the computer scored ${computerScore}. Tie!`;
  } else {
    return `Your score is ${playerScore}, the computer scored ${computerScore}. You lose! ${-playerScore+computerScore} ties`;
  }
}

console.log(game())
