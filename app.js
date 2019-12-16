const userScore = 0;
const computerScore = 0;    
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".scoreboard");
const result_div = document.getElementById(".results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    console.log("computerSelection == " + computerSelection)
    console.log("playerSelection == " + playerSelection)
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


