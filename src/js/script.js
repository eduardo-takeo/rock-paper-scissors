const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const plays = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

//TODO
rockButton.addEventListener("click", startGame);
paperButton.addEventListener("click", startGame);
scissorsButton.addEventListener("click", startGame);

function startGame(humanPlay) {
  const cpuPlay = Math.floor(Math.random() * 3) + 1;

  switch (humanPlay) {
    case 1:
      return cpuPlay === 3 ? "Winner" : "Loser";
    case 2:
      return cpuPlay === 1 ? "Winner" : "Loser";
    case 3:
      return cpuPlay === 2 ? "Winner" : "Loser";
  }
}
