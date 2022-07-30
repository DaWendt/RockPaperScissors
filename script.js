//set up eventlisteners for all buttons
let buttons = document.querySelectorAll("button.PlayButton");
console.log(buttons);
buttons.forEach((button) => {

    button.addEventListener("click", (e) => {
       let clickedButton = e.currentTarget;
       switch (clickedButton.id) {
        case "Rock":
            playRound("Rock")
            break;
        case "Paper":
            playRound("Paper")
            break;
        case "Scissors":
            playRound("Scissors")
            break;
       }
    });
});

//as soon as a button is fired, let the computer generate a corresponding move
function playRound(userInput){

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


//evaluate a winner
//update the score 
//write a message to the gamefeed
//should the reset button be pressed, reset the game