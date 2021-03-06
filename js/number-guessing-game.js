function runGame() {
    const target = Math.floor(Math.random() * 100) + 1;

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0; 

    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100. \n\nWhat is the number?');
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert(`You got it! The correct number is ${target}.\n\nIt took you ${numTries} tries to guess it.`)
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You have not entered a number \n\nPlease enter a number in the 1 - 100 range.');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer in the 1 - 100 range.');
    } else if (guessNumber > target) {
        alert('Guess is too large.');
    } else if (guessNumber < target) {
        alert('Guess is too small.');
    } else {
        correct = true;
    }
    return correct
}