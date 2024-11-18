const ROCK = 'rock'
const PAPER = 'paper'
const SCISSOR = 'scissor'


let currentHScore = 0
let currentCScore = 0


function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 10) + 1
    if (randNum < 7 && randNum > 3) {
        return PAPER
    }
    else if (randNum < 4) {
        return ROCK
    }
    else {
        return SCISSOR
    }
}

function playRound(event) {

    let target = event.target
    let button = target.closest('button')

    let humanScore = document.querySelector('#human-score')
    let computerScore = document.querySelector('#computer-score')
    currentHScore = parseInt(humanScore.textContent, 10)
    currentCScore = parseInt(computerScore.textContent, 10)

    let computerChoice = getComputerChoice()

    if (button) {
        switch (button.className) {
            case 'rock':
                console.log('rock');
                humanChoice = ROCK
                break;
            case 'paper':
                console.log('paper')
                humanChoice = PAPER
                break
            case 'scissor':
                console.log('scissor')
                humanChoice = SCISSOR
                break

        }
    }

    choiceCompare(humanChoice, computerChoice)
    humanScore.textContent = currentHScore
    computerScore.textContent = currentCScore

}

function choiceCompare(HC, CC) {
    if ((HC == ROCK && CC == SCISSOR) || (HC == PAPER && CC == ROCK) || (HC == SCISSOR && CC == PAPER)) {
        display('Victory')
        currentHScore++

    }
    else if ((HC == ROCK && CC == PAPER) || (HC == PAPER && CC == SCISSOR) || (HC == SCISSOR && CC == ROCK)) {
        display('Defeat')
        currentCScore++
    }
    else if (HC == CC) {
        display('Draw')
    }
}

function display(outcome) {
    let result = document.createElement('h1')
    let screen = document.querySelector('.game-display')
    screen.replaceChildren()

    result.textContent = outcome

    screen.appendChild(result)
}

let choices = document.querySelector('#choices')
choices.addEventListener('click', playRound)


