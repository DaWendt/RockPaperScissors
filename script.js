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

let test = takeUserInput();
console.log(test)
//generate the computers input (random)

//play a single round 

