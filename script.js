const ROCK = 'rock';
const PAPER = 'paper';
const SCISSOR = 'scissor';

let currentHScore = 0;
let currentCScore = 0;

/**
 * Returns the computer's choice (rock, paper, or scissors) based on a random number.
 * Adds the choice to the computer's history.
 */
function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 10) + 1;

    if (randNum < 7 && randNum > 3) {
        addToHistory('-parchment', 0);
        return PAPER;
    } else if (randNum < 4) {
        addToHistory('-stone', 0);
        return ROCK;
    } else {
        addToHistory('-cross blades', 0);
        return SCISSOR;
    }
}

/**
 * Handles a round of the game when a user clicks on a choice.
 * Updates scores and displays the round result.
 */
function playRound(event) {
    const button = event.target.closest('button');

    if (!button) return;

    const humanScore = document.querySelector('#human-score');
    const computerScore = document.querySelector('#computer-score');
    currentHScore = parseInt(humanScore.textContent, 10);
    currentCScore = parseInt(computerScore.textContent, 10);

    let humanChoice;
    switch (button.className) {
        case 'rock':
            addToHistory('-stone', 1);
            humanChoice = ROCK;
            break;
        case 'paper':
            addToHistory('-parchment', 1);
            humanChoice = PAPER;
            break;
        case 'scissor':
            addToHistory('-cross blades', 1);
            humanChoice = SCISSOR;
            break;
    }

    const computerChoice = getComputerChoice();

    displayChoices(humanChoice, computerChoice);
    choiceCompare(humanChoice, computerChoice);

    humanScore.textContent = currentHScore;
    computerScore.textContent = currentCScore;
}

/**
 * Compares human and computer choices to determine the round outcome.
 * Updates scores and displays the outcome.
 */
function choiceCompare(humanChoice, computerChoice) {
    if (
        (humanChoice === ROCK && computerChoice === SCISSOR) ||
        (humanChoice === PAPER && computerChoice === ROCK) ||
        (humanChoice === SCISSOR && computerChoice === PAPER)
    ) {
        displayOutcome('Victory');
        currentHScore++;
    } else if (
        (humanChoice === ROCK && computerChoice === PAPER) ||
        (humanChoice === PAPER && computerChoice === SCISSOR) ||
        (humanChoice === SCISSOR && computerChoice === ROCK)
    ) {
        displayOutcome('Defeat');
        currentCScore++;
    } else if (humanChoice === computerChoice) {
        displayOutcome('Draw');
    }
}

/**
 * Displays the outcome of the round in the game display section.
 * Limits the number of outcome messages displayed.
 */
function displayOutcome(outcome) {
    const screen = document.querySelector('.game-display');
    const result = document.createElement('h1');
    result.textContent = outcome;

    if (screen.children.length > 2) {
        screen.lastChild.remove();
    }

    screen.prepend(result);
}

/**
 * Displays the choices made by the human and the computer.
 */
function displayChoices(humanChoice, computerChoice) {
    const screen = document.querySelector('.game-display');
    screen.replaceChildren();

    const HChoiceImage = createChoiceImage(humanChoice);
    const CChoiceImage = createChoiceImage(computerChoice);

    const verses = document.createElement('p');
    verses.textContent = 'VS';

    const division = document.createElement('div');
    division.append(HChoiceImage, verses, CChoiceImage);

    screen.appendChild(division);
}

/**
 * Returns an image element corresponding to a game choice.
 */
function createChoiceImage(choice) {
    const image = document.createElement('img');
    const images = {
        [ROCK]: 'assets/images/rune_stone.png',
        [PAPER]: 'assets/images/parchment.png',
        [SCISSOR]: 'assets/images/sword-new.png',
    };
    image.src = images[choice];
    return image;
}

/**
 * Adds a choice to the human or computer's history.
 * elementToAdd - Symbol representing the choice.
 * whereToAdd - 1 for human, 0 for computer.
 */
function addToHistory(elementToAdd, whereToAdd) {
    const container = whereToAdd
        ? document.querySelector('.human .history')
        : document.querySelector('.computer .history');

    const symbol = document.createElement('p');
    symbol.textContent = elementToAdd;
    container.prepend(symbol);
}

// Add event listener to game choices
document.querySelector('#choices').addEventListener('click', playRound);
