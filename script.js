/*
  Rock Paper Scissors 🚀🔥
*/

let totalScore={computerScore:0 ,playerScore:0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomChoice = Math.floor(Math.random() * 3)
    return rpsChoice[randomChoice]
}
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  
    // return the result of score based on if you won, drew, or lost
  
    let score;
    // All situations where human draws, set `score` to 0
    if (playerChoice === computerChoice) {
        score = 0
       
    } 
   // All situations where human wins, set `score` to 1
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
    } 
    else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        score = 1
    }
    // Otherwise human loses (aka set score to -1)
    else {
        score = -1
    }
    return score;


}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
 
    const resultDiv= document.getElementById('result');
    const playerScoreDiv = document.getElementById('player-score');
    const handsDiv = document.getElementById('hands');
  
    if (score === -1) {
        resultDiv.innerText= 'You Lose!'
    }
    else if (score === 0) {
        resultDiv.innerText = `'It's a Draw!`
    }
    else {  
        resultDiv.innerText = "You Wins!"
        
    }
    playerScoreDiv.innerText= totalScore.playerScore
    handsDiv.innerText= `🧑 ${playerChoice} vs 🤖 ${computerChoice}`

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score =getResult(playerChoice, computerChoice)
    totalScore['playerScore'] +=score
    showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    const  rpsButtons = document.querySelectorAll('.rpsButton');
  
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick =()=>{
            onClickRPS(rpsButton.value)
        }
    })
  
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = ()=> endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
    totalScore['playerScore']= 0
    // totalScore['computerScore']= 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''    // clears
    handsDiv.innerText = '' // clears
    playerScoreDiv.innerText = '' // clears
}

playGame()
