const ROCK = 'rock'
const PAPER = 'paper'
const SCISSOR = 'scissor'


let currentHScore = 0
let currentCScore = 0


function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 10) + 1
    if (randNum < 7 && randNum > 3) {
        addToHistory('-parchment', 0)
        return PAPER
    }
    else if (randNum < 4) {
        addToHistory('-stone', 0)
        return ROCK
    }
    else {
        addToHistory('-cross blades', 0)
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

    if (button) {
        switch (button.className) {
            case 'rock':
                addToHistory('-stone', 1)
                humanChoice = ROCK
                break;
            case 'paper':
                addToHistory('-parchment', 1)
                humanChoice = PAPER
                break
            case 'scissor':
                addToHistory('-cross blades', 1)
                humanChoice = SCISSOR
                break

        }
    }
    let computerChoice = getComputerChoice()

    displayChoices(humanChoice, computerChoice)

    choiceCompare(humanChoice, computerChoice)
    humanScore.textContent = currentHScore
    computerScore.textContent = currentCScore

}

function choiceCompare(HC, CC) {
    if ((HC == ROCK && CC == SCISSOR) || (HC == PAPER && CC == ROCK) || (HC == SCISSOR && CC == PAPER)) {
        displayOutcome('Victory')
        currentHScore++

    }
    else if ((HC == ROCK && CC == PAPER) || (HC == PAPER && CC == SCISSOR) || (HC == SCISSOR && CC == ROCK)) {
        displayOutcome('Defeat')
        currentCScore++
    }
    else if (HC == CC) {
        displayOutcome('Draw')
    }
}

function displayOutcome(outcome) {
    let result = document.createElement('h1')
    let screen = document.querySelector('.game-display')
    // screen.replaceChildren()

    result.textContent = outcome
    screen.prepend(result)
}

function displayChoices(humanChoice, computerChoice) {
    let HChoiceImage = document.createElement('img')
    let verses = document.createElement('p')
    let CChoiceImage = document.createElement('img')
    let division = document.createElement('div')

    let screen = document.querySelector('.game-display')
    screen.replaceChildren()

    if (humanChoice == ROCK) {
        HChoiceImage.src = 'assets/images/rune_stone.png'
    }
    else if (humanChoice == PAPER) {
        HChoiceImage.src = 'assets/images/parchment.png'
    }
    else if (humanChoice == SCISSOR) {
        HChoiceImage.src = 'assets/images/sword-new.png'
    }

    if (computerChoice == ROCK) {
        CChoiceImage.src = 'assets/images/rune_stone.png'
    }
    else if (computerChoice == PAPER) {
        CChoiceImage.src = 'assets/images/parchment.png'
    }
    else if (computerChoice == SCISSOR) {
        CChoiceImage.src = 'assets/images/sword-new.png'
    }

    verses.textContent = 'VS'

    division.append(HChoiceImage, verses, CChoiceImage)
    screen.appendChild(division)
}

function addToHistory(elementToAdd, whereToAdd) {
    const container = whereToAdd
        ? document.querySelector('.human .history')
        : document.querySelector('.computer .history');

    let symbol = document.createElement('p')
    symbol.textContent = elementToAdd
    container.prepend(symbol)

}

let choices = document.querySelector('#choices')
choices.addEventListener('click', playRound)


