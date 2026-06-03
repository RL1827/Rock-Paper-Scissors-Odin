function getComputerChoice(){
    let choices;
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        choices = "rock";
    } else if (randomIndex === 1) {
        choices = "paper";
    } else {
        choices = "scissors";
    }
    return choices;
}

function getHumanChoice(){
    let choices;
    const userInput = prompt("Please choose rock, paper, or scissors:").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        choices = userInput;
    } 
    return choices;
}

function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    if (computerSelection === humanSelection) {
        console.log(`It's a tie! You both chose ${humanSelection}`);
        return (2);
    } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper")
    ) { 
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        return(1);
    } else {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        return(0);
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const result = playRound();
        if (result === 0) {
            humanScore++;
        } else if (result === 1) {
            computerScore++;
        }
    }
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
}
let humanScore = 0;
let computerScore = 0;
playGame();