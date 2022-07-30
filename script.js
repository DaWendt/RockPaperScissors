//set up eventlisteners for all buttons
let buttons = document.querySelectorAll("button.PlayButton");
buttons.forEach((button) => {

    button.addEventListener("click", (e) => {
       let clickedButton = e.currentTarget;
       switch (clickedButton.id) {
        case "Rock":
            update(playRound("Rock"));
            break;
        case "Paper":
            update(playRound("Paper"));
            break;
        case "Scissors":
            update(playRound("Scissors"));
            break;
       }
    });
});

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {

    resetGame();
});

//as soon as a button is fired, let the computer generate a corresponding move
function playRound(userInput, computerInput = generateComputerInput()){
//evaluate a winner
    if(computerInput == userInput){
        return {winner: "Tie",
                winningMove: computerInput};
    } 
    
    if(computerInput == "Rock" && userInput == "Scissors" ||
       computerInput == "Scissors" && userInput == "Paper" ||
       computerInput == "Paper" && userInput == "Rock"){

        return {winner: "Computer",
                winningMove: computerInput};
    } else {

        return {winner: "Player",
                winningMove: userInput};
    }
}

function generateComputerInput(){

    let number = Math.floor((Math.random() * 3) + 1);
    switch (number) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
    }
}

function update(roundResult){

    let gamefeed = document.querySelector('.gameFeed');
    let playerScore = document.querySelector('.player');
    let computerScore = document.querySelector('.computer');

    if(roundResult.winner == "Player"){

        playerScore.textContent = Number(playerScore.textContent) + 1;

        createGameFeedMessage("Player wins with " + roundResult.winningMove);

    } else if(roundResult.winner == "Computer"){

        computerScore.textContent = Number(computerScore.textContent) + 1;

        createGameFeedMessage("Computer wins with " + roundResult.winningMove);

    } else{

        createGameFeedMessage("Tie achieved with " + roundResult.winningMove);
    }

    if(Number(playerScore.textContent) == 5){

        createGameFeedMessage("Player wins!");

    }else if(Number(computerScore.textContent) == 5){

        createGameFeedMessage("Computer wins!");
    }

}
//all entries will be marked with the class removable, so they may be removed when the game resets or concludes
function createGameFeedMessage(message){

    let gamefeed = document.querySelector('.gameFeed');
    let gameFeedEntry = document.createElement('p');
    gameFeedEntry.classList.add('removable')
    gameFeedEntry.textContent = message;

    gamefeed.appendChild(gameFeedEntry);
    gamefeed.scrollTo(0, gamefeed.scrollHeight);
}

function resetGame(){

    let entries = document.querySelectorAll('.removable');
   

}


//TODO: as soon as a victory emerges, take out the eventlisteners
//should the reset button be pressed, reset the game