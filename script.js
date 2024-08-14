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
