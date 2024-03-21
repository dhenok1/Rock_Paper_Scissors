


function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    }
    if (choice === 1){
        return "scissors";
    }
    return "paper";
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    const winConditionRock = playerSelection === "rock" && computerSelection === "scissors";
    const winConditionPaper = playerSelection === "paper" && computerSelection === "rock";
    const winConditionScissors = playerSelection === "scissors" && computerSelection === "paper";
    if (winConditionRock || winConditionPaper || winConditionScissors){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } 
    if (playerSelection === computerSelection){
        return "You drew";
    }
    return "You Lose! " + playerSelection + " doesn't beats " + computerSelection;
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    
}
playGame();