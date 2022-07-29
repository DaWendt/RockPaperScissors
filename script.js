//play a five round game of rock paper scissors
//game();

function game(){

    let userScore = 0;
    let computerScore = 0;
    
    for (let index = 0; index < 5; index++) {
       
        let roundResult = playRound();

        if(roundResult.winner == "Computer"){
            console.log("Computer has won with " + roundResult.winningMove);
            computerScore++;
        }else if(roundResult.winner == "Player"){
            console.log("Player has won with" + roundResult.winningMove);
            userScore++;
        }else if(roundResult.winner == "Tie"){
            console.log("Tie achieved with " + roundResult.winningMove);
        }

        console.log("Player Score: " + userScore + "\nComputer Score: " +
                    computerScore);
    }

    if(userScore == computerScore){
        console.log("The game has tied!");
    }else if(userScore > computerScore){
        console.log("Player has won the game!");
    }else{
        console.log("Computer has won the game!");
    }
}


//take the users input(case insensitive)
function takeUserInput(){

    let userInput = prompt("Do you want to play rock, paper or scissors?").toString().toLowerCase();
    let notVerifiedInput = true;
    console.log(userInput);

    while (notVerifiedInput){

        if(userInput == "rock" || userInput == "paper" || userInput == "scissors"){
            notVerifiedInput = false;
        }else{
            userInput = prompt("Please use only 'rock', 'paper' or 'scissors'!").toString().toLowerCase();
            console.log(userInput);
        }
    }
    
    return userInput;
}

//generate the computers input (random)
function takeComputerInput(){

    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let result;

    switch (randomNumber){

        case 1: 
        result = "rock";
        break;

        case 2: 
        result = "paper";
        break;

        case 3:
        result = "scissors";
        break;
    }

    return result;
}

//play a single round 
function playRound(computerInput = takeComputerInput(), userInput = takeUserInput()){

    if(computerInput == userInput){
        return {winner: "Tie",
                winningMove: computerInput};
    } 
    
    if(computerInput == "rock" && userInput == "scissors" ||
       computerInput == "scissors" && userInput == "paper" ||
       computerInput == "paper" && userInput == "rock"){

        return {winner: "Computer",
                winningMove: computerInput};
    } else {

        return {winner: "Player",
                winningMove: userInput};
    }
}


