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

    signCompare(humanChoice, computerChoice)
    humanScore.textContent = currentHScore
    computerScore.textContent = currentCScore

}

function signCompare(HC, CC) {
    if ((HC == ROCK && CC == SCISSOR) || (HC == PAPER && CC == ROCK) || (HC == SCISSOR && CC == PAPER)) {
        console.log('You win this round!')
        currentHScore++

    }
    else if ((HC == ROCK && CC == PAPER) || (HC == PAPER && CC == SCISSOR) || (HC == SCISSOR && CC == ROCK)) {
        console.log('You Lose this round!')
        currentCScore++
    }
    else if (HC == CC) {
        console.log('It\'s a Tied for this round')
    }
}

// function playGame() {
//     let gameOn = true
//     let counter = 1

//     console.log('Welcome to game of ROCK-PAPER-SCISSOR')
//     console.log('type 1 for rock, 2 for paper and 3 for scissor')
//     while (gameOn) {
//         let humanChoice = getHumanChoice()
//         let computerChoice = getComputerChoice()
//         console.log(`Round ${counter}`)
//         playRound(humanChoice, computerChoice)
//         counter++
//         if (counter > 5) {
//             gameOn = false
//         }
//     }
//     console.log(`Your score: ${humanScore}`)
//     console.log(`Opponent score: ${computerScore}`)
//     if (humanScore == computerScore) {
//         console.log('The game was a tie')
//     }
//     else if (humanScore > computerScore) {
//         console.log('You have WON the game')
//     }
//     else {
//         console.log('You have LOST the game')
//     }

// }

// playGame()


let choices = document.querySelector('#choices')

choices.addEventListener('click', playRound)


