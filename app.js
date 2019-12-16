let userScore = 0;
let computerScore = 0;    
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".scoreboard");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = playerSelection + " beats " + computerSelection + ". You win!"
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = playerSelection + " beats " + computerSelection + ". You lost!"
}

function draw(playerSelection, computerSelection) {
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = playerSelection + " equals " + computerSelection + ". Its a draw!"
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerSelection, computerSelection);
            break;
        case "rockaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerSelection, computerSelection);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerSelection, computerSelection);
            break;
    }
}


rock_div.addEventListener('click', function() {
    game("rock");
})

paper_div.addEventListener('click', function() {
    game("paper");
})

scissors_div.addEventListener('click', function() {
    game("scissors");
})


