const options = ["rock", "paper", "scissors"];

/*------------------Computer------------------*/
function randInt(max) {
  return Math.floor(Math.random() * max); // returns random number between 0 and max-1
}

function getComputerChoice() {
  return options[randInt(3)];
}

/*------------------setup------------------*/
//have to make player choice depend on which button is pressed

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerChoice = getComputerChoice();
    const round = document.createElement("div");
    const buttonContainer = document.querySelector("#button-container");
    round.classList.add("round");
    round.textContent = playRound(playerSelection, computerChoice);
    buttonContainer.appendChild(round); //may be able to delete child
    let winner;
    if (computerScore == 5) {
      winner = document.createElement("div");
      winner.textContent = "computer won"
      buttonContainer.appendChild(winner);
      
    }
    else if (playerScore == 5){
      winner = document.createElement("div");
      winner.textContent = "you won"
      buttonContainer.appendChild(winner);
      
    }
  });
});
//ADD POINT SYSTEM TO playRound instead of button?
/*------------------Gameplay------------------*/
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerChoice) {
  if (
    (playerSelection == "rock" && computerChoice == "scissors") ||
    (playerSelection == "paper" && computerChoice == "rock") ||
    (playerSelection == "scissors" && computerChoice == "paper")
  ) {
    return `you win! You chose ${playerSelection}, the computer chose ${computerChoice}. your score ${++playerScore}`;
  } else if (playerSelection == computerChoice) {
    return `tie! You chose ${playerSelection}, the computer chose ${computerChoice}. `;
  } else {
    return `you lose! You chose ${playerSelection}, the computer chose ${computerChoice}. computer score ${++computerScore}`;
  }
}



 
    
   
  
  
  

/*
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

console.log(game()) */
