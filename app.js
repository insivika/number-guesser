/*
Game Functions:
- Player must guess a numbrer between a min and max
- Player gets certain amount of guesses
- Notify player of how many guess remaining
- Notify the player of the correct value if loose
- Let player choose to play again.
*/

// Game Values

let   min = 1,
      max = 10,
      winningNum = 2,
      guessLeft = 3;

// Get the UI elements

const guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num');


// add play again listner

guessBtn.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('play-again')){
        location.reload();
    }
})

// Assign min and mix

minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess
guessBtn.addEventListener('click', function(){
    // Parse the guess  
    const guess = parseInt(guessInput.value);
    // Validate input
    if (isNaN(guess) || guess < min || guess > max){
        setMessage('Please enter a value bewteen ' + min + ' and ' + max + '.', 'red');
    } else {
        // Game Over - Won
         // Check if won
        if(guess === winningNum){
          gameOver(true, guess + ' is the correct number, YOU WON!');
           guessInput.disabled = true;
         
        } else {
           // Wrong number
           // Game continues - wrong answer
           guessLeft -= 1;
           // Set message
          setMessage(guess + ' is NOT the correct number. You have ' + guessLeft + ' guess left.', 'red');
           guessInput.value = '';
        }
        
        if (guessLeft === 0){
           // Game over - lost
           gameOver(false, guess + ' is NOT the correct number. The correct number was ' + winningNum + '.');
            guessInput.disabled = true;
        } 
        
    }
         
})

function setMessage(msg, color){
    message.textContent = msg;
    guessInput.style.borderColor = color;
    message.style.color = color;
    
}
    


// Set messsage
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    
    message.textContent = msg;
   
    guessInput.style.borderColor = color;
    
    message.style.color = color;
    
    guessBtn.value = 'Play Again?';
    
    guessBtn.className = 'play-again';
}
   
    // Play again?


    // Listen for play again class




