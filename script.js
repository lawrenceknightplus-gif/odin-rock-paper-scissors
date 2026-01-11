// get computers choice

const getComputersChoice = () =>{
    let choices = ["rock", "paper", "scissors"]
    let randmonChoice = Math.floor(Math.random() * choices.length)
    console.log(choices[randmonChoice])

    return choices[randmonChoice]
} 

// get players choice
const getPlayersChoice = () => {
    let playersChoice = prompt("Enter your choice").toLowerCase()
    console.log(playersChoice)


    return playersChoice
}



// set computers && players score in a veriable
let computersScore = 0
let playersScore = 0

// set max rounds veriable
let maxScore = 3


// play a round

function playRound(playerChoice, computersChoice){
  // check if player or computer score is === maxscore
  // if player or computer won return winner msg
  if(playersScore === maxScore|| computersScore === maxScore){
    alert(`Winner is ${playersScore === maxScore ? "player" : "computer"}`)
    startGame()
  }

  // check who won the round 
  // if player won return player won and increment player score
  // else return computer won and increment computers score

  if(playerChoice === computersChoice){
    alert(`draw no one gets a point`)
  }

  if(playerChoice === "rock" && computersChoice === "paper"){
    playersScore++
    alert(`player won this round currentscore : ${playersScore}`)
  }
  if(playerChoice === "paper" && computersChoice === "rock"){
    computersScore++
    alert(`computer won this round currentscore : ${computersScore}`)

  }

  if(playerChoice === "paper" && computersChoice === "scissors"){
        playersScore++
    alert(`player won this round currentscore : ${playersScore}`)


  }
  if(playerChoice === "scissors" && computersChoice === "paper"){
        computersScore++
    alert(`computer won this round currentscore : ${computersScore}`)


  }

  if(playerChoice === "scissors" && computersChoice === "rock"){
        playersScore++
    alert(`player won this round currentscore : ${playersScore}`)


  }
  if(playerChoice === "rock" && computersChoice === "scissors"){
        computersScore++
    alert(`computer won this round currentscore : ${computersScore}`)

  }  
}

// start game
  // get computer and players score
  // play a round
  // reset game
startGame()
function startGame(){
  resetGame()
  
  while(playersScore <= 3|| computersScore <= 3){
  playRound(getPlayersChoice(), getComputersChoice())
  }
}

// reset game
  // player and computers score
function resetGame(){
  playersScore = 0
  computersScore = 0
}
