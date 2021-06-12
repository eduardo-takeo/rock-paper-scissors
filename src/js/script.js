//Elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const score = document.getElementById("score");
const playAgainButton = document.getElementById("play-again-button");

//Enum
const plays = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

//Events
rockButton.addEventListener("click", () => startGame(1));
paperButton.addEventListener("click", () => startGame(2));
scissorsButton.addEventListener("click", () => startGame(3));
playAgainButton.addEventListener("click", () => playAgain());

//Functions
function startGame(playerChoice) {
  let result = "";
  const cpuChoice = Math.floor(Math.random() * 3) + 1;

  switch (playerChoice) {
    case cpuChoice:
      result = "Draw";
      break;
    case 1:
      result = cpuChoice === 3 ? "You win" : "You lost";
      break;
    case 2:
      result = cpuChoice === 1 ? "You win" : "You lost";
      break;
    case 3:
      result = cpuChoice === 2 ? "You win" : "You lost";
      break;
  }

  updateScore(result);
  showResult(result, playerChoice, cpuChoice);
}

function showResult(result, playerChoice, cpuChoice) {
  document.getElementsByClassName("controls-newGame")[0].style.display = "none";
  document.getElementsByClassName("controls-results")[0].style.display = "flex";

  const playerChoiceImage = document.getElementById("player-choice");
  const cpuChoiceImage = document.getElementById("cpu-choice");

  playerChoiceImage.src = `assets/icon-${plays[
    playerChoice
  ].toLowerCase()}.svg`;
  cpuChoiceImage.src = `assets/icon-${plays[cpuChoice].toLowerCase()}.svg`;

  switch (playerChoice) {
    case 1:
      playerChoiceImage.style.border = "1.5rem solid var(--red)";
      break;
    case 2:
      playerChoiceImage.style.border = "1.5rem solid var(--blue-500)";
      break;
    case 3:
      playerChoiceImage.style.border = "1.5rem solid var(--yellow)";
      break;
  }

  switch (cpuChoice) {
    case 1:
      cpuChoiceImage.style.border = "1.5rem solid var(--red)";
      break;
    case 2:
      cpuChoiceImage.style.border = "1.5rem solid var(--blue-500)";
      break;
    case 3:
      cpuChoiceImage.style.border = "1.5rem solid var(--yellow)";
      break;
  }

  document.getElementById("result").innerHTML = result;
}

function playAgain() {
  document.getElementsByClassName("controls-newGame")[0].style.display =
    "block";
  document.getElementsByClassName("controls-results")[0].style.display = "none";
}

function updateScore(result) {
  let counter = Number(score.innerHTML);
  switch (result) {
    case "You win":
      counter++;
      break;
    case "You lost":
      counter--;
      break;
    default:
      break;
  }

  score.innerHTML = String(counter);
}
