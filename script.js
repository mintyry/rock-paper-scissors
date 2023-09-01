//write down the knowns

let options = ['rock', 'paper', 'scissors'];
let secret = 'gun';

//need to think about state: wins, losses, draws
// when you start the game
let numOfWins = 0;
let numOfLosses = 0;
let numOfDraws = 0;

//state of game being active (boolean)

let isGameActive = true;

window.alert('Hi! Hi! Hi!\nWill you play with me?');
// if (isGameActive === false) {
//     window.alert('That\'s okay! We\'ll play sooner than you think.');
// }


function playGame() {
   
    let userInput;

    while (!options.includes(userInput)) {
        userInput = window.prompt('Rock, paper, scissors -- shoot!\nBang, bang! Teehee!').toLowerCase();
    }
    console.log(userInput);
    //we have user input, now we need computer input; generate 0, 1, or 2 (indices)
    let randomIndex = (Math.floor(Math.random() * options.length));
    let computerInput = options[randomIndex];

    window.alert(`The computer chose ${computerInput}`);

    if (
        (userInput === 'rock' && computerInput === 'scissors') ||
        (userInput === 'paper' && computerInput === 'rock') ||
        (userInput === 'scissors' && computerInput === 'paper')
    ) {
        numOfWins++;
        window.alert('You won! Yay! Congrats!\nYou\'ll regret it! :-)');
    } else if (
        (userInput === 'rock' && computerInput === 'paper') ||
        (userInput === 'paper' && computerInput === 'scissors') ||
        (userInput === 'scissors' && computerInput === 'rock')
    ) {
        numOfLosses++;
        window.alert('LOSER, LOSER, LOSER! Now, you belong to me... :-)');
    } else {
        numOfDraws++;
        window.alert('It\'s a DRAW! What a coincidence!\nI just finished my drawing of you :-)')
    }

    window.alert(`wins: ${numOfWins}\nlosses: ${numOfLosses}\ndraws: ${numOfDraws}`);

    isGameActive = window.confirm('Will you play with me again?');

    //random gives us a number between 0 and 1.
    //that number then is multiplied by 0, 1, or 2.
    //round down, use Math.floor to get exacrly 0, 1, or 2.
}




//while loop is useful when you dont know when the end is

while(isGameActive===true) {
    playGame();
}

window.alert('Fine, leave me. I will remember this.');
//theres a way to convert upper to lower is possible in case user doesnt match casing