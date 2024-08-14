let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const resultMessage = document.getElementById("result-message");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playAgainButton = document.getElementById("play-again");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const humanChoice = choice.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

playAgainButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  resultMessage.textContent = "";
  playAgainButton.classList.add("hidden");
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultMessage.textContent = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  updateScoreDisplay();
  checkGameOver();
}

function updateScoreDisplay() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

function checkGameOver() {
  if (humanScore === 5 || computerScore === 5) {
    resultMessage.textContent +=
      humanScore === 5 ? " You won the game!" : " You lost the game!";
    playAgainButton.classList.remove("hidden");
    choices.forEach((choice) => (choice.disabled = true));
  }
}
