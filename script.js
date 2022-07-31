// This returns the computer's random choice
function computerPlay() {
    let rdm = (Math.floor(Math.random()*100));
    if (rdm < 33) {
        return 'Rock';
    } else if (rdm > 67) {
        return 'Scissors';
    } else {
        return 'Paper';
    }
}

let player_score = 0;
let computer_score = 0;

//This function returns who's the winner of the round and the game
function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(player_score == 5 || computer_score == 5) {
        return;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        results.textContent = 'Loss';
        computer_score++;
        if (computer_score == 5) final.textContent = "I'm sorry you lost.";
        count.textContent = 'Your score: ' + player_score.toString() + ', Computer score: ' + computer_score.toString();
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        results.textContent = 'Loss';
        computer_score++;
        if (computer_score == 5) final.textContent = "I'm sorry you lost.";
        count.textContent = 'Your score: ' + player_score.toString() + ', Computer score: ' + computer_score.toString();
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        results.textContent = 'Loss';
        computer_score++;
        if (computer_score == 5) final.textContent = "I'm sorry you lost.";
        count.textContent = 'Your score: ' + player_score.toString() + ', Computer score: ' + computer_score.toString();
    } else if (playerSelection === computerSelection) {
        results.textContent = 'Tie';
        count.textContent = 'Your score: ' + player_score.toString() + ', Computer score: ' + computer_score.toString();        
    } else {
        results.textContent = 'Win';
        player_score++;
        if (player_score == 5) final.textContent = 'You Won! Congrats!';
        count.textContent = 'Your score: ' + player_score.toString() + ', Computer score: ' + computer_score.toString();
    }
}



//DOM
const btn1 = document.querySelector('#rock')
const btn2 = document.querySelector('#paper')
const btn3 = document.querySelector('#scissors')


btn1.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection);
})
btn2.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection);
})
btn3.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection);
    })


const container = document.querySelector('#container');

const results = document.createElement('p');
container.appendChild(results);

const count = document.createElement('p');
container.appendChild(count);

const final = document.createElement('p');
container.appendChild(final);