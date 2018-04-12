/*
Game Functions:
- Player must guess a numbrer between a min and max
- Player gets certain amount of guesses
- Notify player of how many guess remaining
- Notify the player of the correct value if loose
- Let player choose to play again.
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3;
    
// Get the UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign min and mix
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
    } else {
         // Game Over - Won
         // Check if won
    if (guess === winningNum){
        gameOver(true, `${winningNum} is correct, YOU WIN!`, 'green');
    } else {
        // Wrong number
        guessLeft -= 1;
        
        if(guessLeft === 0){
        // Game over - lost  
        gameOver(false, 'Game Over, you lost. The correct number was ' + winningNum + '.')
        } else {
        setMessage(guess + " is not correct. You've got " + guessLeft + " guess let.Try again! ", 'red');
        // change border color
        guessInput.style.borderColor = 'red'; 

        }
      } 
    }
});

// Set messsage
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg){
        let color;
        won === true ? color = 'green' : color = 'red'
        
        // disable input
        guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = color;
        // set message 
        setMessage(msg, color)
    
}
