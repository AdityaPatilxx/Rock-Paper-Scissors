const ROCK = 'rock'
const PAPER = 'paper'
const SCISSOR = 'scissor'


function compChoice(){

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

function humChoice(){
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


