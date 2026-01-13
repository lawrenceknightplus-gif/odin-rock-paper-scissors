const playerScoreEl = document.getElementById("playerscore");
const computerScoreEl = document.getElementById("computerscore");
const roundEl = document.getElementById("curren-round");
const resultEl = document.getElementById("result");

const choiceBtns = document.querySelectorAll(".choice-btn");

// get computers choice

const getComputersChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let randmonChoice = Math.floor(Math.random() * choices.length);
  console.log(choices[randmonChoice]);

  return choices[randmonChoice];
};

// get players choice
const getPlayersChoice = (e) => {
  let playersChoice = e.target.textContent.toLowerCase();
  console.log(playersChoice);
  return playersChoice;
};

// set computers && players score in a veriable
let computersScore = 0;
let playersScore = 0;

// set max rounds veriable
let maxScore = 3;

// play a round

function playRound(playerChoice, computersChoice) {
  // check if player or computer score is === maxscore
  // if player or computer won return winner msg
  if (playersScore === maxScore || computersScore === maxScore) {
    alert(`Winner is ${playersScore === maxScore ? "player" : "computer"}`);
    startGame();
  }

  // check who won the round
  // if player won return player won and increment player score
  // else return computer won and increment computers score

  if (playerChoice === computersChoice) {
    alert(`draw no one gets a point`);
  }

  if (playerChoice === "rock" && computersChoice === "paper") {
    updateScore("player");
    displayResult("player")
  }
  if (playerChoice === "paper" && computersChoice === "rock") {
    updateScore("computer");
    displayResult("computer")
  }

  if (playerChoice === "paper" && computersChoice === "scissors") {
    updateScore("player");
    displayResult("player")

  }
  if (playerChoice === "scissors" && computersChoice === "paper") {
    updateScore("computer");
    displayResult("computer")

  }

  if (playerChoice === "scissors" && computersChoice === "rock") {
    updateScore("player");
    displayResult("player")

  }
  if (playerChoice === "rock" && computersChoice === "scissors") {
    updateScore("computer");
    displayResult("computer")

  }
}

const updateScore = (score) => {
  switch (score) {
    case "player":
      playersScore++;
      break;
    case "computer":
      computersScore++;
      break;
  }
};

const displayResult = (roundWinner) => {
  resultEl.textContent = `${roundWinner} won this round : ${
    roundWinner === "player" ? playersScore : computersScore
  }`;
};

// reset game
// player and computers score
function resetGame() {
  playersScore = 0;
  computersScore = 0;
}

choiceBtns.forEach((choice) => {
  choice.addEventListener("click", getPlayersChoice);
});
