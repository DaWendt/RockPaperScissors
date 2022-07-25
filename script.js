//play a five round game of rock paper scissors

//take the users input(case insensitive)
function takeUserInput(){

    let userInput = prompt("Do you want to play rock, paper or scissors?").toString().toLowerCase();
    let notVerifiedInput = true;
    console.log(userInput)

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

    let randomNumber = Math.floor((Math.random() * 3) + 1)
    let result

    switch (randomNumber){

        case 1: 
        result = "rock"
        break

        case 2: 
        result = "paper"
        break

        case 3:
        result = "scissors"
        break
    }

    return result;
}

//play a single round 
function playRound(computerInput = takeComputerInput(), userInput = takeUserInput()){

    if((computerInput == "rock" && userInput == "rock") || (computerInput == "scissors" && userInput == "scissors") 
        || (computerInput == "paper" && userInput == "paper")){
        return "Tie!"
    }

}
