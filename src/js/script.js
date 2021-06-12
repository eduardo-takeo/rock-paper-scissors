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

  document.getElementById("player-choice").src = `assets/icon-${plays[
    playerChoice
  ].toLowerCase()}.svg`;
  document.getElementById("cpu-choice").src = `assets/icon-${plays[
    cpuChoice
  ].toLowerCase()}.svg`;

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
