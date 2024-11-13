const ROCK = 'rock'
const PAPER = 'paper'
const SCISSOR = 'scissor'

let humanScore = 0
let computerScore = 0

function getComputerChoice(){

    let randNum = Math.floor(Math.random() * 10) + 1
    if (randNum < 7 && randNum > 3){
        return PAPER
    }
    else if (randNum < 4){
        return ROCK
    }
    else{
        return SCISSOR
    }
}

function getHumanChoice(){
    let validInput =  false;
    while(!validInput){
        let userInput = prompt('What\'s your choice:')
        if (userInput == 1){
            validInput = true
            return ROCK
        }
        else if(userInput == 2){
            validInput = true
            return PAPER
        }
        else if(userInput == 3){
            validInput = true
            return SCISSOR
        }
        else{
            console.log('Invalid Input, try again')
        }
    }
}

function playRound(HC,CC){
    if ( (HC == ROCK && CC == SCISSOR) || (HC == PAPER && CC == ROCK) || (HC == SCISSOR && CC == PAPER) ) {
        console.log('You win this round!')
        humanScore++
    }
    else if ( (HC == ROCK && CC == PAPER) || (HC == PAPER && CC == SCISSOR) || (HC == SCISSOR && CC == ROCK) ) {
        console.log('You Lose this round!')
        computerScore++
    }
    else if (HC == CC){
        console.log('It\'s a Tied for this round')
    }
}

function playGame(){
    let gameOn = true
    let counter = 1

    console.log('Welcome to game of ROCK-PAPER-SCISSOR')
    console.log('type 1 for rock, 2 for paper and 3 for scissor')
    while (gameOn){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        console.log(`Round ${counter}`)
        playRound(humanChoice, computerChoice)
        counter++
        if (counter > 5){
            gameOn = false
        }
    }
    console.log(`Your score: ${humanScore}`)
    console.log(`Opponent score: ${computerScore}`)
    if (humanScore == computerScore){
        console.log('The game was a tie')
    }
    else if(humanScore > computerScore){
        console.log('You have WON the game')
    }
    else{
        console.log('You have LOST the game')
    }

}

playGame()