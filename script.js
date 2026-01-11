// get computers choice

const getComputersChoice = () =>{
    let choices = ["rock", "paper", "scissors"]
    let randmonChoice = Math.floor(Math.random() * choices.length)
    console.log(choices[randmonChoice])

    return choices[randmonChoice]
} 

// get players choice
const getPlayersChoice = () => {
    let playersChoice = prompt("Enter your choice")
    console.log(playersChoice)


    return playersChoice.toLowerCase()
}



// set computers && players score in a veriable
let computersScore = 0
let playersScore = 0


// play a round

function playRound(playerChoice, computersChoice){
  // check if player or computer score is === maxscore
  let maxScore = 3
  // if player or computer won return winner msg
  if(playersScore === maxScore|| computersScore === maxScore){
    alert(`Winner is ${playersScore === maxScore ? "player" : "computer"}`)
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
  else if(playerChoice === "paper" && computersChoice === "rock"){
    computersScore++
    alert(`player won this round currentscore : ${computersScore}`)

  }

  if(playerChoice === "paper" && computersChoice === "scissors"){
        playersScore++
    alert(`player won this round currentscore : ${playersScore}`)


  }
  else if(playerChoice === "scissors" && computersChoice === "paper"){
        computersScore++
    alert(`player won this round currentscore : ${computersScore}`)


  }

  if(playerChoice === "scissors" && computersChoice === "rock"){
        playersScore++
    alert(`player won this round currentscore : ${playersScore}`)


  }
  else if(playerChoice === "rock" && computersChoice === "scissors"){
        computersScore++
    alert(`player won this round currentscore : ${computersScore}`)


  }

  
}

// playRound(getPlayersChoice(), getComputersChoice())



// start game
  // get computer and players score
  // play a round
  // reset game

// reset game
  // player and computers score

