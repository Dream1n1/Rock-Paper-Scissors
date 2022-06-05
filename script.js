
// return a random string using Math.random()
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

let loss = "You Lose!";
let win = "You Win!";
let tie = "Tie!";
let wrong = "Wrong! choose either Rock, Paper or scissors";
//This function returns who's the winner of the round
function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return loss;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return loss;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return loss;
    } else if (playerSelection !== 'paper' && playerSelection !== 'rock' && playerSelection !== 'scissors') {
        return wrong;
    } else if (playerSelection === computerSelection) {
        return tie;
    } else {
        return win;
    }
}

// first to 5
function game() {
    let player_score = 0;
    let computer_score = 0;
    let game_round = 1;
    for (let i = 1; i < 6; i++) {
        playerSelection = prompt('ROCK PAPER OR SCISSORS: ')
        console.log('Round :------------------------' + game_round + '---------------------------');
        round = playRound(playerSelection);
        if (round == win) {
            console.log(round);
            player_score++;
            i--;
            console.log('Your score: '+ player_score);
            console.log('Computer score: '+ computer_score);
        } else if (round == loss) {
            console.log(round);
            computer_score++;
            console.log('Your score: '+ player_score);
            console.log('Computer score: '+ computer_score);
            i--;
        } else if (round == tie){
            console.log(round);
            console.log('Your score: '+ player_score);
            console.log('Computer score: '+ computer_score);
            i--;
            game_round--;
        } else if (round == wrong){
            console.log(wrong)
            i--;
        }
        if (computer_score == 5 || player_score == 5) {
            i = i+6;
            console.log('Gamer over!');
        }
        game_round++;
    }
    if (player_score > computer_score) {
        return 'Congrats you won against the computer!!!'
    } else if (player_score < computer_score) {
        return 'Well guess what you lost💀';
    }
}


console.log(game())