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

function playRound(humanChoice) {
    const computerSelection = getComputerChoice();
    let display = document.querySelector("div")
    const humanSelection = humanChoice;
    if (computerSelection === humanSelection) {
        display.textContent = `It's a tie! You both chose ${humanSelection}`;
        return (2);
    } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper")
    ) { 
        display.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
        return(1);
    } else {
        display.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
        return(0);
    }

}

let selection = document.querySelectorAll("button")
selection.forEach(button => {
    button.addEventListener("click",(select) => {
        switch(select.target.id){
            case "scissors":
                playRound("scissors")
                break
            case "paper":
                playRound("paper")
                break
            case "rock":
                playRound("rock")
                break
        }
    })
})
