//play a five round game of rock paper scissors

//set up eventlisteners for all buttons
let buttons = document.querySelectorAll("button.PlayButton");
console.log(buttons);
buttons.forEach((button) => {

    button.addEventListener("click", (e) => {
       console.log(e.currentTarget)
    });

});

//let the game run until either the player or the computer has 5 wins
//as soon as a button is fired, let the computer generate a corresponding move

//evaluate a winner
//update the score 
//write a message to the gamefeed
//should the reset button be pressed, reset the game