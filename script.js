const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
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

// set rounds veriable
let rounds = 0

// play a round

function playRound(playerChoice, computersChoice) {
  // check if player or computer score is === maxscore
  // if player or computer won return winner msg
  if (playersScore === maxScore|| computersScore === maxScore) {
    resultEl.textContent = (`Winner is ${playersScore === maxScore ? "player" : "computer"}`);
    choiceBtns.forEach(btn => btn.disabled = true)
    resetGame()
    return
  }

  // check who won the round
  // if player won return player won and increment player score
  // else return computer won and increment computers score

  if (playerChoice === computersChoice) {
    resultEl.textContent = (`draw no one gets a point`);
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

  rounds++
  roundEl.textContent = rounds
}

const updateScore = (score) => {
  switch (score) {
    case "player":
      playersScore++;
      playerScoreEl.textContent = playersScore
      break;
    case "computer":
      computersScore++;
      computerScoreEl.textContent = computersScore
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
  playerScoreEl.textContent = 0
  computersScore = 0;
  computerScoreEl.textContent =0
  rounds = 0
  roundEl.textContent = 0
}

choiceBtns.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    playRound(getPlayersChoice(e), getComputersChoice())
  });
});
