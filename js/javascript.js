function getComputerChoice() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3); // Compute Index of myArray
    return myArray[i];
}



let score = [0, 0];
let roundScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerInput = String(button.id);
        let results = document.querySelector(".results");
        let roundScore = playGame(playerInput, getComputerChoice());
        if (roundScore != 2) {
            if (roundScore == 0) {
                score[1]++;
                results.textContent = `The current score is ${score[0]}:${score[1]}`;
            } else if (roundScore == 1) {
                score[0]++;
                results.textContent = `The current score is ${score[0]}:${score[1]}`;
            }
        } else {
            results.textContent = `Draw! Current score: ${score[0]} to ${score[1]}!`;
        } 
        if (score[1] == 3) {
            results.textContent = `The computer won ${score[0]} to ${score[1]}!`; 
            score = [0, 0];
            const playAgain = document.createElement("div");
        } else if (score[0] == 3) {
            results.textContent = `You won ${score[0]} to ${score[1]}!`;
            score = [0, 0];
        }
        roundScore = 0;
    });
});




// Return 2 for a draw, 1 if you win and 0 if the computer wins 
function playGame(playerSelection, computerSelection) {
    playerSelection = 
        playerSelection.slice(0, 1).toUpperCase() + 
        playerSelection.slice(1).toLowerCase();
    computerSelection = 
        computerSelection.slice(0, 1).toUpperCase() + 
        computerSelection.slice(1).toLowerCase();

    if (playerSelection == computerSelection) {
        return 2;
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return 1;
        } else {
            return 0;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return 0;
        } else {
            return 1;
        }
    } else if (computerSelection == "Rock") {
        return 0;
    } else {
        return 1;
    }
}


function game(playerInput) {
    let score = [0, 0];
    let roundScore = 0;
 
    roundScore = playGame(playerInput, getComputerChoice());
    if (roundScore != 2) {
        if (roundScore == 0) {
            score[1]++;
            console.log(`The current score is ${score[0]}:${score[1]}`);
        } else if (roundScore == 1) {
            score[0]++;
            console.log(`The current score is ${score[0]}:${score[1]}`);
        }
    } else {
        console.log(`This was a Draw. The current score is ${score[0]}:${score[1]}`);
    }
    if (score[1] == 3) {
        return `The computer won ${score[1]}:${score[0]}`; 
    } else if (score[0] == 3) {
        return `You won ${score[0]}:${score[1]}`;
    }
    roundScore = 0;
}



