const ROCK = 'rock'
const PAPER = 'paper'
const SCISSOR = 'scissor'


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
        console.log('type 1 for rock, 2 for paper and 3 for scissor')
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

function playGame(HC,CC){
    let humanScore = 0
    let computerScore = 0
    if ( (HC == ROCK && CC == SCISSOR) || (HC == PAPER && CC == ROCK) || (HC == SCISSOR && CC == PAPER) ) {
        console.log('You Win!')
        humanScore++
        return humanScore
    }
    else if ( (HC == ROCK && CC == PAPER) || (HC == PAPER && CC == SCISSOR) || (HC == SCISSOR && CC == ROCK) ) {
        console.log('You Lose!')
        computerScore++
        return computerScore
    }
}

let computerChoice = getComputerChoice()
let humanChoice = getHumanChoice()

playGame(humanChoice, computerChoice)

