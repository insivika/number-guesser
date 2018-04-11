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
    winningNum = randomNum(),
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

// Play again event listner
guessBtn.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('play-again')){
        location.reload();
    }
});

      
// Listen for guess
guessBtn.addEventListener('click', function(){
    
    message.innerHTML=''
    // Validate our input
    if(isNaN(guessInput.value) || guessInput.value < min || guessInput.value > max){
        alert("Please enter a valid number between the min and max")
        guessInput.value = '';
        guessInput.style.borderColor = '#D1D1D1';  
    } else {
       guessLeft -= 1;
       // Check if won
        
       // Game over - won        
       if (guessInput.value == winningNum){
       // Dispable input
       guessInput.disabled = true;
       // Change submit button UI
       guessBtn.value = 'Play Again!';
       // Add play again class
       guessBtn.className = 'play-again';    
       
       // Create winning text and append to p
       message.appendChild(document.createTextNode(`Congrat's, ${guessInput.value} is the correct number, YOU WON!`));
       // Change message color
       message.style.color='green';
       // Change border of input
       guessInput.style.borderColor = 'green';  
       }  else if(guessInput.value != winningNum & guessLeft > 0){
          // Wrong Number
          message.appendChild(document.createTextNode(`Sorry, ${guessInput.value} is not correct, you have ${guessLeft} left. TRY AGAIN!`));
          // Change message color
          message.style.color='red';
          // Change border of input
          guessInput.style.borderColor = 'red';  
          // Clear input field
          guessInput.value = '';
       }  
        
       if (guessLeft === 0){
        // game over lost
        message.appendChild(document.createTextNode(`You've lost :(`));
         // Change message color
        message.style.color='red';
        // Change border of input
        guessInput.style.borderColor = 'red'; 
        // Clear input field
        guessInput.value = '';   
        // Dispable input
        guessInput.disabled = true;
        // Change submit button UI
        guessBtn.value = 'Play Again!';
        // Add play again class
        guessBtn.className = 'play-again';  
        }
    }
});
      

// Game over


// Declare getRandomNumber
function randomNum(){
    return Math.floor(Math.random() * max)+ min;
} 

console.log(winningNum);

// Declare setMessage


