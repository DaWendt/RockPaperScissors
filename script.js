//set up eventlisteners for all buttons
let buttons = document.querySelectorAll("button.PlayButton");
console.log(buttons);
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

        let gameFeedEntry = document.createElement('p');
        gameFeedEntry.textContent = "Player wins with " + roundResult.winningMove;

        gamefeed.appendChild(gameFeedEntry);
        gamefeed.scrollTo(0, gamefeed.scrollHeight);

    } else if(roundResult.winner == "Computer"){
        computerScore.textContent = Number(computerScore.textContent) + 1;

        let gameFeedEntry = document.createElement('p');
        gameFeedEntry.textContent = "Computer wins with " + roundResult.winningMove;

        gamefeed.appendChild(gameFeedEntry);
        gamefeed.scrollTo(0, gamefeed.scrollHeight);

    } else{

        let gameFeedEntry = document.createElement('p');
        gameFeedEntry.textContent = "Tie achieved with: " + roundResult.winningMove;

        gamefeed.appendChild(gameFeedEntry);
        gamefeed.scrollTo(0, gamefeed.scrollHeight);

    }

}



//update the score 
//write a message to the gamefeed
//should the reset button be pressed, reset the game