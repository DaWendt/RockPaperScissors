//set up eventlisteners for all buttons
let buttons = document.querySelectorAll(".PlayButton");
buttons.forEach((button) => {

    button.addEventListener("click", buildHandlingLogic);
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

        createGameFeedMessage("Player wins! To play a new game please reset");
        takeEventListenersOut();

    }else if(Number(computerScore.textContent) == 5){

        createGameFeedMessage("Computer wins! To play a new game please reset");
        takeEventListenersOut();
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
    let gameFeed = document.querySelector('.gameFeed');

    //remove all entries in the gameFeed
    entries.forEach((entry) => {
        gameFeed.removeChild(entry);
    });

    //reinitiate the eventlisteners
    let buttons = document.querySelectorAll(".PlayButton");
    buttons.forEach((button) => {

    button.addEventListener("click", buildHandlingLogic);
    });

    //reset the scoreboard
    resetScoreBoard();
}

function takeEventListenersOut(){

    let buttons = document.querySelectorAll('.PlayButton');
    buttons.forEach((button) => {
        button.removeEventListener('click', buildHandlingLogic);
    })
}

function buildHandlingLogic(e){
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
}

function resetScoreBoard(){

    let playerScore = document.querySelector('.player');
    let computerScore = document.querySelector('.computer');

    playerScore.textContent = 0;
    computerScore.textContent = 0;

}

//TODO refactor the building of the eventListeners
//TODO fix "twitching of scoreboard"