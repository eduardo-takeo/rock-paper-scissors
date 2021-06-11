const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const plays = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

rockButton.addEventListener("click", () => startGame(1));
paperButton.addEventListener("click", () => startGame(2));
scissorsButton.addEventListener("click", () => startGame(3));

function startGame(playerChoice) {
  let result = "";
  const cpuChoice = Math.floor(Math.random() * 3) + 1;

  switch (playerChoice) {
    case cpuChoice:
      result = "Draw";
      break;
    case 1:
      result = cpuChoice === 3 ? "Winner" : "Loser";
      break;
    case 2:
      result = cpuChoice === 1 ? "Winner" : "Loser";
      break;
    case 3:
      result = cpuChoice === 2 ? "Winner" : "Loser";
      break;
  }

  showResult(result, playerChoice, cpuChoice);
}

//TODO: Renderizar tela de resultado
function showResult(result, playerChoice, cpuChoice) {
  alert(
    `${result} \n Player chose ${plays[playerChoice]} and CPU chose ${plays[cpuChoice]}`
  );
}
