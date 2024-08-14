let humanScore = 0;
let computerScore = 0;

console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return choice;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final score: ${humanScore} - ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lose the game! Final score: ${humanScore} - ${computerScore}`
    );
  } else {
    console.log(
      `The game is a tie! Final score: ${humanScore} - ${computerScore}`
    );
  }
}

playGame();
