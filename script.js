const ROCK = 'rock'
const PAPER = 'paper'
const SCISSOR = 'scissor'


function compChoice(){
    let computerChoice
    let randNum = Math.floor(Math.random() * 10) + 1
    if (randNum < 7 && randNum > 3){
        computerChoice = PAPER
    }
    else if (randNum < 4){
        computerChoice = ROCK
    }
    else{
        computerChoice = SCISSOR
    }
    return computerChoice
}


