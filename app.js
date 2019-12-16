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
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("USER WINS");
            break;
        case "rockaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("USER LOSES!");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("ITS A DRAW!");
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


