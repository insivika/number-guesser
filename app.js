/*
Game Functions:
- Player must guess a numbrer between a min and max
- Player gets certain amount of guesses
- Notify player of how many guess remaining
- Notify the player of the correct value if loose
- Let player choose to play again.
*/

// Game Values

let max  = 10,
    min = 1,
    winningNum = randomNum(min, max),
    guessesLeft = 3;
    


// Get the UI elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');


// add play again listner

game.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('play-again')){
        location.reload()
    }
})

// Assign min and mix

maxNum.textContent = max;
minNum.textContent = min;

// Listen for guess
guessBtn.addEventListener('click', function(){
    // Parse the guess  
    const guess = parseInt(guessInput.value);    
    // Validate input
    if (isNaN(guess) || guess < min || guess > max){
        alert('Please enter a number between ' + min + ' and ' + max + '.');
    } else {
         // Game Over - Won
         // Check if won
        if (guess === winningNum){
            gameOver(true, guess + " is correct! You've WON");
            
        } else {
            // Wrong number
            guessesLeft -= 1;
            
            // Game over - lost 
            if (guessesLeft === 0){
                
             gameOver(false, "You've lost! The correct number was " + winningNum + ".");
         
            } else {
                  // Game continues - wrong answer
                  // Set message
                   setMessage(guess + " is incorrect. You've got " + guessesLeft + ".", 'red');
                  // Set color
                   guessInput.style.color = 'red';
                  // Disable input
                  guessInput.value = '';
          }
       }
    }
});

// Set messsage
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}        

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
   // Disable input
    guessInput.disabled = true;
    // Set color
    message.style.color = color;
    // Set border color 
    guessInput.style.borderColor = color;
    // set message
    setMessage(msg);
    // Play again?
    guessBtn.className = 'play-again';
    // Listen for play again class
    guessBtn.value = 'Play Again?' 
}

function randomNum(max, min){
       return Math.floor(Math.random()*(max - min+1)+min);
}


console.log(winningNum)



